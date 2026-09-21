import 'server-only'
import { createClient } from '@supabase/supabase-js'

export function createContentClient() {
  const url =
    process.env.SUPABASE_URL?.trim() ||
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()

  const secretKey =
    process.env.SUPABASE_SECRET_KEY?.trim() ||
    process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()

  if (!url || !secretKey) {
    const missing = [!url ? 'SUPABASE_URL' : null, !secretKey ? 'SUPABASE_SECRET_KEY' : null].filter(Boolean).join(', ')
    throw new Error('Missing server-side Supabase configuration: ' + missing)
  }

  return createClient(url, secretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  })
}
