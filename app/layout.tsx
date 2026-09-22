import type { Metadata } from 'next'
import AmbientMotion from '../components/ambient-motion'
import './globals.css'

const siteDescription='An open, machine-readable standard for cognitive embodiment and robot interoperability.'

export const metadata: Metadata = {
  metadataBase: new URL('https://openrgd.org'),
  title: {
    default: 'OpenRGD — Robot Graph Definition',
    template: '%s | OpenRGD',
  },
  description: siteDescription,
  applicationName: 'OpenRGD',
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'OpenRGD',
    title: 'OpenRGD — Robot Graph Definition',
    description: siteDescription,
    url: 'https://openrgd.org',
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'OpenRGD — Robot Graph Definition',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenRGD — Robot Graph Definition',
    description: siteDescription,
    images: ['/opengraph-image'],
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/icon.svg',
  },
}

const globalJsonLd = {
  '@context':'https://schema.org',
  '@graph':[
    {
      '@type':'Organization',
      '@id':'https://openrgd.org/#organization',
      name:'OpenRGD',
      url:'https://openrgd.org',
      logo:'https://raw.githubusercontent.com/OpenRGD/openrgd/main/assets/branding/openrgd.png',
      sameAs:[
        'https://github.com/OpenRGD',
      ],
    },
    {
      '@type':'WebSite',
      '@id':'https://openrgd.org/#website',
      url:'https://openrgd.org',
      name:'OpenRGD',
      description:siteDescription,
      inLanguage:'en',
      publisher:{'@id':'https://openrgd.org/#organization'},
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
        <AmbientMotion />
        {children}
      </body>
    </html>
  )
}
