import type { Metadata, Viewport } from 'next'
import { DM_Sans, Cormorant_Garamond, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Daisy Lopez Adhiambo — UI/UX Designer & IT Specialist | Nairobi',
  description: 'Portfolio of Daisy Lopez Adhiambo — UI/UX Designer, IT Support Specialist, and Digital Growth Associate based in Nairobi, Kenya.',
  generator: 'v0.app',
  openGraph: {
    title: 'Daisy Lopez Adhiambo — UI/UX Designer & IT Specialist',
    description: 'Portfolio of Daisy Lopez Adhiambo — UI/UX Designer, IT Support Specialist, and Digital Growth Associate based in Nairobi, Kenya.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daisy Lopez Adhiambo — UI/UX Designer & IT Specialist',
    description: 'Portfolio of Daisy Lopez Adhiambo — UI/UX Designer, IT Support Specialist, and Digital Growth Associate based in Nairobi, Kenya.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D0D1A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased noise-overlay">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
