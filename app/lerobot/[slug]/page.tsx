import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'
import { getLeRobotTopic, lerobotTopics, type LeRobotTopic } from '@/lib/lerobot/topics'

export const dynamicParams = false

export function generateStaticParams() {
  return lerobotTopics.map(topic => ({slug: topic.slug}))
}

function recordFor(topic: LeRobotTopic): CitationRecordData {
  return {
    maturity:topic.maturity,
    lastVerified:'16 Oct 2026',
    lastVerifiedIso:'2026-10-16',
    sourceVersion:topic.sourceVersion,
    evidenceBoundary:topic.evidenceBoundary,
    pageUrl:'https://openrgd.org/lerobot/'+topic.slug,
    canonicalSource:topic.sources[0]?.href,
  }
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> {
  const {slug}=await params
  const topic=getLeRobotTopic(slug)
  if (!topic) return {robots:{index:false}}
  return referenceMetadata({
    title:topic.title,
    description:topic.description,
    canonicalPath:'/lerobot/'+topic.slug,
    record:recordFor(topic)
  })
}

export default async function LeRobotTopicPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params
  const topic=getLeRobotTopic(slug)
  if (!topic) notFound()
  return (
    <ConceptPage
      eyebrow={'LEROBOT / '+slug.replaceAll('-',' ').toUpperCase()}
      title={topic.h1}
      lead={topic.lead}
      citationRecord={recordFor(topic)}
      sources={topic.sources}
      related={[
        {href:'/lerobot',title:'LeRobot + OpenRGD',copy:'The full learning and evidence boundary from hardware to policy.'},
        ...topic.related
      ]}
    >
      {topic.sections.map(section=>(
        <ConceptSection key={section.title} kicker={section.kicker} title={section.title}>
          {section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}
          {section.flow ? <ConceptFlow items={section.flow}/> : null}
          {section.grid ? <ConceptGrid items={section.grid}/> : null}
        </ConceptSection>
      ))}
    </ConceptPage>
  )
}
