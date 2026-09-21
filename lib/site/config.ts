export const siteCode = process.env.SITE_CODE?.trim() || 'openrgd'
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://openrgd.org').replace(/\/$/, '')
