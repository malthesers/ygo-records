import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Metadata } from 'next'

export const revalidate = 3600

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const matrixBook = localFont({
  src: './fonts/matrix-small-caps.woff2',
  display: 'swap',
  variable: '--font-matrix-book',
})

const linkRating = localFont({
  src: './fonts/rogsansrfstd-bd.woff2',
  display: 'swap',
  variable: '--font-link-rating',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ygo-records.vercel.app'),
  title: 'YGO Records',
  description: 'YGO Records | Yu-Gi-Oh! deck, event and player database',
  keywords: ['Yu-Gi-Oh!', 'Yugioh'],
  openGraph: {
    title: 'YGO Records',
    description: 'YGO Records | Yu-Gi-Oh! deck, event and player database',
    images: '/opengraph-image.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`font-body ${inter.variable} ${matrixBook.variable} ${linkRating.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
