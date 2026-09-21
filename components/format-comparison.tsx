const rows = [
  {
    format: 'URDF',
    href: '/urdf',
    responsibility: 'Robot model structure',
    strength: 'Links, joints, geometry, inertials, collision and joint constraints in a ROS-centric XML model.',
    boundary: 'Not a general scene-composition system or semantic embodiment graph.',
  },
  {
    format: 'USD',
    href: '/usd',
    responsibility: 'Composable scene description',
    strength: 'Large hierarchical scenegraphs, references, variants, time-sampled data and physics schemas.',
    boundary: 'Not a robot-specific semantic capability or governance model by default.',
  },
  {
    format: 'SDF',
    href: '/sdf',
    responsibility: 'Simulation-oriented model and world description',
    strength: 'Robots, environments, models, sensors, physics, lights, plugins and simulation context.',
    boundary: 'Not designed as a general AI embodiment-governance or provenance graph.',
  },
  {
    format: 'RGD',
    href: '/rgd',
    responsibility: 'Semantic embodiment graph',
    strength: 'Identity, physical evidence, operational constraints, capability semantics, provenance and lifecycle context.',
    boundary: 'Does not replace scene composition, a physics engine, middleware or a physical runtime.',
  },
]

export default function FormatComparison() {
  return (
    <div className="format-comparison">
      <div className="format-comparison-head">
        <span>FORMAT</span>
        <span>PRIMARY RESPONSIBILITY</span>
        <span>STRENGTH</span>
        <span>BOUNDARY</span>
      </div>
      {rows.map((row) => (
        <a href={row.href} className="format-comparison-row" key={row.format}>
          <strong>{row.format}</strong>
          <span>{row.responsibility}</span>
          <p>{row.strength}</p>
          <p>{row.boundary}</p>
        </a>
      ))}
    </div>
  )
}
