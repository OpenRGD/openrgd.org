import { NextResponse, type NextRequest } from 'next/server'
import { isCanonicalHost } from '@/lib/seo/routes'

export function proxy(request: NextRequest) {
  const response=NextResponse.next()
  const hostname=request.headers.get('host') || ''

  if (!isCanonicalHost(hostname)) {
    response.headers.set('X-Robots-Tag','noindex, nofollow, noarchive')
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
