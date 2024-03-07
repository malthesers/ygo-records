import TopDecksSection from '@/components/landing/top-decks/TopDecksSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YGOTops',
  description: 'YGOTops',
}

export default function Home() {
  return (
    <main>
      <TopDecksSection />
    </main>
  )
}
