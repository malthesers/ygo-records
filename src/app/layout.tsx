import './globals.css'
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
