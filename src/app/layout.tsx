import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

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
  metadataBase: new URL('http://localhost:3000'),
  title: 'YGO Records',
  description: 'YGO Records | Discover the newest and most effective decks',
  keywords: ['yugioh', 'yu-gi-oh!', 'meta'],
  // viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  // themeColor: '#0C4A6E',
  // colorScheme: 'dark',
  authors: { name: 'Malthesers (Malthe Kusk Lauritsen)', url: 'https://malthesers.github.io/' },
  creator: 'Malthesers',
  openGraph: {
    title: 'YGO Records',
    description: 'Discover the newest and most effective decks',
    url: 'https://ygo-tops.vercel.app/',
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
