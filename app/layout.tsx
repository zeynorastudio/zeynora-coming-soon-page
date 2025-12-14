import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zeynora — Premium Fashion House | Launching Soon',
  description: 'Zeynora is a premium fashion house crafting thoughtfully curated collections for modern Indian wardrobes. Launching soon.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://zeynora.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Zeynora',
    title: 'Zeynora — Premium Fashion House | Launching Soon',
    description: 'Zeynora is a premium fashion house crafting thoughtfully curated collections for modern Indian wardrobes. Launching soon.',
    images: [
      {
        url: 'https://oanzsagekfpoenbkobgc.supabase.co/storage/v1/object/public/hero_images/hero-desktop.webp',
        width: 1200,
        height: 630,
        alt: 'Zeynora — Premium Fashion House',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeynora — Premium Fashion House | Launching Soon',
    description: 'Zeynora is a premium fashion house crafting thoughtfully curated collections for modern Indian wardrobes. Launching soon.',
    images: ['https://oanzsagekfpoenbkobgc.supabase.co/storage/v1/object/public/hero_images/hero-desktop.webp'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zeynora',
  url: 'https://www.zeynora.in/',
  logo: 'https://oanzsagekfpoenbkobgc.supabase.co/storage/v1/object/public/hero_images/zeyn%20logo.jpg',
  sameAs: [
    'https://www.instagram.com/zeynorastudio?igsh=MWd3bzh1eWR2b2NpNg==',
  ],
  description: 'Zeynora is a premium fashion house crafting thoughtfully curated collections for modern Indian wardrobes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={`${inter.className} font-body`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  )
}

