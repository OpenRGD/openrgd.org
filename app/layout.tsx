import type { Metadata } from 'next'
import AmbientMotion from '../components/ambient-motion'
import './globals.css'

const siteDescription='An open, machine-readable standard for cognitive embodiment and robot interoperability.'
const ecmSiteId='114323a5-7925-4ad1-ad91-65a46440c6b9'
const ecmApiBase='https://www.ecm.plus'

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__ECM_CONFIG__ = {
                siteId: "${ecmSiteId}",
                apiBase: "${ecmApiBase}"
              };

              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
              gtag("consent", "default", {
                analytics_storage: "denied",
                ad_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied",
                functionality_storage: "granted",
                security_storage: "granted",
                wait_for_update: 500
              });
            `,
          }}
        />
        <script
          src={ecmApiBase + '/ecm.js'}
          data-ecm-site={ecmSiteId}
          data-ecm-api={ecmApiBase}
          defer
        />
      </head>
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
