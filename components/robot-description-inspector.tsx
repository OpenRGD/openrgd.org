'use client'

import { useMemo, useState } from 'react'

type Stat = { label: string; value: string | number }
type Finding = { level: 'evidence' | 'review' | 'boundary'; title: string; copy: string }
type Report = { format: string; title: string; stats: Stat[]; findings: Finding[]; errors: string[] }

const sampleUrdf = [
  '<?xml version="1.0"?>',
  '<robot name="sample_arm">',
  '  <link name="base_link"/>',
  '  <link name="tool_link"><inertial><mass value="1.2"/><inertia ixx="0.01" ixy="0" ixz="0" iyy="0.01" iyz="0" izz="0.01"/></inertial></link>',
  '  <joint name="tool_joint" type="revolute">',
  '    <parent link="base_link"/><child link="tool_link"/><axis xyz="0 0 1"/>',
  '    <limit lower="-1.57" upper="1.57" effort="20" velocity="2"/>',
  '  </joint>',
  '</robot>',
].join('\n')

function countRegex(text: string, pattern: RegExp): number { return (text.match(pattern) || []).length }

function detectCycle(edges: Array<[string,string]>): boolean {
  const graph = new Map<string,string[]>()
  for (const [p,c] of edges) graph.set(p,[...(graph.get(p)||[]),c])
  const visiting = new Set<string>(), visited = new Set<string>()
  const visit = (node:string):boolean => {
    if (visiting.has(node)) return true
    if (visited.has(node)) return false
    visiting.add(node)
    for (const next of graph.get(node)||[]) if (visit(next)) return true
    visiting.delete(node); visited.add(node); return false
  }
  return [...graph.keys()].some(visit)
}

function inspect(text:string):Report {
  const source=text.trim()
  if (!source) return {format:'—',title:'Paste or load a robot description',stats:[],findings:[],errors:[]}

  if (source.startsWith('#usda')) {
    return {
      format:'USDA / OpenUSD text',
      title:'Text-level USD inspection',
      stats:[
        {label:'Xform defs',value:countRegex(source,/\bdef\s+Xform\b/g)},
        {label:'Physics joints',value:countRegex(source,/Physics(?:Revolute|Prismatic|Fixed|Spherical)Joint/g)},
        {label:'Rigid body APIs',value:countRegex(source,/PhysicsRigidBodyAPI/g)},
        {label:'References / payloads',value:countRegex(source,/\b(?:references|payload)\s*=/g)},
      ],
      findings:[
        {level:'evidence',title:'Textual USD constructs detected',copy:'This tool can count authored USDA patterns without resolving a composed stage.'},
        {level:'review',title:'Composition remains unresolved',copy:'References, payloads, variants and layer opinions require an OpenUSD-aware stage.'},
        {level:'boundary',title:'No full USD parser here',copy:'Use OpenUSD or the target importer when composed-stage semantics matter.'},
      ],
      errors:[],
    }
  }

  const doc=new DOMParser().parseFromString(source,'application/xml')
  const parseError=doc.querySelector('parsererror')
  if (parseError) return {format:'Unknown XML',title:'XML could not be parsed',stats:[],findings:[],errors:[parseError.textContent?.slice(0,220)||'XML parse error']}

  const root=doc.documentElement, rootName=root.localName.toLowerCase()
  const xacroCount=countRegex(source,/<xacro:(?:macro|property|include|if|unless|arg)\b/g)

  if (rootName==='robot') {
    const links=[...doc.getElementsByTagName('link')], joints=[...doc.getElementsByTagName('joint')]
    const edges:Array<[string,string]>=[], childCounts=new Map<string,number>()
    for(const joint of joints){
      const parent=joint.getElementsByTagName('parent')[0]?.getAttribute('link')
      const child=joint.getElementsByTagName('child')[0]?.getAttribute('link')
      if(parent&&child){edges.push([parent,child]);childCounts.set(child,(childCounts.get(child)||0)+1)}
    }
    const childSet=new Set(edges.map(([,c])=>c))
    const roots=links.map(l=>l.getAttribute('name')).filter((n):n is string=>!!n&&!childSet.has(n))
    const gazebo=doc.getElementsByTagName('gazebo').length
    const transmissions=doc.getElementsByTagName('transmission').length
    const ros2=doc.getElementsByTagName('ros2_control').length
    const mimic=doc.getElementsByTagName('mimic').length
    const meshes=doc.getElementsByTagName('mesh').length
    const findings:Finding[]=[{level:'evidence',title:'Structural evidence detected',copy:'Links, joints and authored physical elements are visible directly in the parsed XML.'}]
    if(xacroCount)findings.push({level:'review',title:'Xacro is not expanded',copy:'Macro/include/argument logic may change the generated URDF. Inspect the expanded artifact before treating these counts as the final model.'})
    if(gazebo)findings.push({level:'review',title:'Gazebo extensions present',copy:'These can affect URDF-to-SDF behavior but are not portable URDF core semantics.'})
    if(ros2)findings.push({level:'review',title:'ros2_control extension present',copy:'Hardware interfaces require runtime plugins and do not prove commissioned hardware.'})
    if(transmissions)findings.push({level:'review',title:'Transmission metadata present',copy:'Interpretation depends on the consuming control and hardware stack.'})
    if(mimic)findings.push({level:'review',title:'Mimic joints present',copy:'Verify the target format preserves the intended coupled-joint behavior.'})
    if([...childCounts.values()].some(v=>v>1)||detectCycle(edges))findings.push({level:'review',title:'Non-tree topology signal',copy:'Multiple parents or a detected cycle deserves target-specific review.'})
    if(meshes)findings.push({level:'review',title:'External mesh dependencies',copy:'Portable conversion depends on resolving mesh URIs and package/resource paths.'})
    findings.push({level:'boundary',title:'Semantic embodiment remains external',copy:'Capability, provenance, lifecycle and execution authority are outside URDF core.'})
    return {
      format:xacroCount?'Xacro / URDF source':'URDF',
      title:root.getAttribute('name')||'URDF robot',
      stats:[
        {label:'Links',value:links.length},{label:'Joints',value:joints.length},{label:'Root links',value:roots.length},
        {label:'Inertials',value:doc.getElementsByTagName('inertial').length},{label:'Meshes',value:meshes},{label:'Mimic',value:mimic},
        {label:'Transmissions',value:transmissions},{label:'ros2_control',value:ros2},{label:'Gazebo extensions',value:gazebo},{label:'Xacro constructs',value:xacroCount},
      ],
      findings,errors:[]
    }
  }

  if(rootName==='mujoco'){
    const c=(tag:string)=>doc.getElementsByTagName(tag).length
    return {format:'MJCF',title:root.getAttribute('model')||'MuJoCo model',stats:[
      {label:'Bodies',value:c('body')},{label:'Joints',value:c('joint')},{label:'Geoms',value:c('geom')},
      {label:'Actuator-like elements',value:c('motor')+c('position')+c('velocity')+c('general')},
      {label:'Sensors',value:c('sensor')},{label:'Tendons',value:c('tendon')},{label:'Equality blocks',value:c('equality')},{label:'Defaults',value:c('default')},
    ],findings:[
      {level:'evidence',title:'MuJoCo-native model detected',copy:'Bodies, joints, geoms and simulator-native constructs can be counted directly.'},
      {level:'review',title:'Compiler semantics matter',copy:'Defaults and inferred values may only become explicit after MuJoCo compilation.'},
      {level:'boundary',title:'Simulation model is not semantic embodiment',copy:'Capabilities, provenance and hardware authority remain separate concerns.'},
    ],errors:[]}
  }

  if(rootName==='sdf'){
    const c=(tag:string)=>doc.getElementsByTagName(tag).length
    return {format:'SDFormat',title:'SDF '+(root.getAttribute('version')||''),stats:[
      {label:'Worlds',value:c('world')},{label:'Models',value:c('model')},{label:'Links',value:c('link')},{label:'Joints',value:c('joint')},
      {label:'Frames',value:c('frame')},{label:'Sensors',value:c('sensor')},{label:'Plugins',value:c('plugin')},
    ],findings:[
      {level:'evidence',title:'Simulation-oriented structure detected',copy:'SDF can represent model and world context beyond a single URDF robot.'},
      {level:'review',title:'Pose semantics require scope awareness',copy:'Relative frames and nested scopes need an SDFormat-aware parser for full meaning.'},
      {level:'boundary',title:'Plugins are executable extensions',copy:'A plugin declaration is not equivalent to portable description semantics.'},
    ],errors:[]}
  }

  return {format:'Unknown XML',title:'Unsupported root: '+rootName,stats:[{label:'Root element',value:rootName}],findings:[
    {level:'boundary',title:'No format-specific rules applied',copy:'Valid XML, but not recognized as URDF/Xacro, MJCF or SDF by this inspector.'}
  ],errors:[]}
}

export default function RobotDescriptionInspector() {
  const [source,setSource]=useState(sampleUrdf)
  const report=useMemo(()=>inspect(source),[source])
  const onFile=async(file:File|undefined)=>{if(file)setSource(await file.text())}
  const download=()=>{
    const blob=new Blob([JSON.stringify({generated_at:new Date().toISOString(),report},null,2)],{type:'application/json'})
    const url=URL.createObjectURL(blob),a=document.createElement('a')
    a.href=url;a.download='openrgd-description-inspection.json';a.click();URL.revokeObjectURL(url)
  }

  return (
    <div className="description-inspector">
      <div className="description-inspector-input">
        <div className="description-inspector-toolbar">
          <label><span>LOAD FILE</span><input type="file" accept=".urdf,.xacro,.xml,.sdf,.mjcf,.usda,.usd,text/xml,text/plain" onChange={(e)=>onFile(e.target.files?.[0])}/></label>
          <button type="button" onClick={()=>setSource(sampleUrdf)}>Sample URDF</button>
          <button type="button" onClick={()=>setSource('')}>Clear</button>
        </div>
        <textarea aria-label="Robot description source" value={source} onChange={(e)=>setSource(e.target.value)} spellCheck={false}/>
        <p>Processed locally in this browser. The source file is not uploaded.</p>
      </div>

      <div className="description-inspector-report" aria-live="polite">
        <div className="description-inspector-head">
          <div><span>DETECTED FORMAT</span><strong>{report.format}</strong></div>
          <button type="button" onClick={download} disabled={!report.stats.length}>Download JSON</button>
        </div>
        <h2>{report.title}</h2>
        {report.errors.length?<div className="inspector-errors">{report.errors.map(e=><p key={e}>{e}</p>)}</div>:null}
        <div className="inspector-stats">{report.stats.map(s=><div key={s.label}><span>{s.label}</span><strong>{s.value}</strong></div>)}</div>
        <div className="inspector-findings">{report.findings.map((f,i)=>(
          <article className={'inspector-finding '+f.level} key={f.title}><span>{String(i+1).padStart(2,'0')} · {f.level.toUpperCase()}</span><h3>{f.title}</h3><p>{f.copy}</p></article>
        ))}</div>
      </div>
    </div>
  )
}
