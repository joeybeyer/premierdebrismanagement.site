import { Outfit, Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Schema } from '@/components/seo/Schema'
import { generateLocalBusinessSchema } from '@/lib/schema'
import './globals.css'
import type { Metadata } from 'next'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Premier Debris Management | Dumpster Rental Services',
    template: '%s | Premier Debris Management',
  },
  description:
    'Professional dumpster rental services for construction, renovation, and cleanout projects. Same-day delivery available. Call now for instant pricing.',
  keywords: [
    'dumpster rental',
    'roll-off dumpster',
    'construction dumpster',
    'debris removal',
    'waste management',
  ],
  authors: [{ name: 'Premier Debris Management' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Premier Debris Management',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <Schema data={generateLocalBusinessSchema()} />
      </head>
      <body className="font-inter antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
