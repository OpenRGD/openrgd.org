import type { Metadata } from 'next'
import AmbientMotion from '../components/ambient-motion'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://openrgd.org'),
  title: {
    default: 'OpenRGD — Robot Graph Definition',
    template: '%s | OpenRGD',
  },
  description:
    'An open, machine-readable standard for cognitive embodiment and robot interoperability.',
  openGraph: {
    type: 'website',
    siteName: 'OpenRGD',
    title: 'OpenRGD — Robot Graph Definition',
    description:
      'An open, machine-readable standard for cognitive embodiment and robot interoperability.',
    url: 'https://openrgd.org',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AmbientMotion />
        {children}
      </body>
    </html>
  )
}
