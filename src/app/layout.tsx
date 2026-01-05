import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { SmoothScroll, Navigation, Footer } from '@/components'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Cold Lava — Intelligent Business Systems',
  description:
    'Consultancy and software development for businesses ready to build what they actually need.',
  keywords: [
    'AI consultancy',
    'custom software',
    'business automation',
    'AI agents',
    'Liverpool',
  ],
  authors: [{ name: 'Cold Lava' }],
  openGraph: {
    title: 'Cold Lava — Intelligent Business Systems',
    description:
      'Consultancy and software development for businesses ready to build what they actually need.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Cold Lava',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cold Lava — Intelligent Business Systems',
    description:
      'Consultancy and software development for businesses ready to build what they actually need.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <div className="grain" aria-hidden="true" />
        </SmoothScroll>
      </body>
    </html>
  )
}
