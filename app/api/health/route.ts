import { NextResponse } from 'next/server'
import { createContentClient } from '@/lib/supabase/content'
import { siteCode } from '@/lib/site/config'

export const dynamic = 'force-dynamic'

export async function GET() {
  const startedAt = Date.now()

  try {
    const supabase = createContentClient()
    const { error } = await supabase
      .schema('cms')
      .rpc('fn_list_published_content', {
        p_site_code: siteCode,
        p_content_type_code: null,
        p_featured_only: false,
        p_limit: 1,
        p_offset: 0,
      })

    if (error) {
      return NextResponse.json(
        {
          ok: false,
          site: siteCode,
          database: false,
          latency_ms: Date.now() - startedAt,
        },
        { status: 503, headers: { 'Cache-Control': 'no-store' } },
      )
    }

    return NextResponse.json(
      {
        ok: true,
        site: siteCode,
        database: true,
        latency_ms: Date.now() - startedAt,
      },
      { headers: { 'Cache-Control': 'no-store' } },
    )
  } catch {
    return NextResponse.json(
      {
        ok: false,
        site: siteCode,
        database: false,
        latency_ms: Date.now() - startedAt,
      },
      { status: 503, headers: { 'Cache-Control': 'no-store' } },
    )
  }
}
