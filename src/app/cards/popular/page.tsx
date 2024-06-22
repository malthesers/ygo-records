import { Metadata } from 'next'
import PopularCardsBanner from './PopularCardsBanner'
import PopularCardsDisplay from './PopularCardsDisplay'

export const metadata: Metadata = {
  title: 'Popular Cards | YGO Records',
  description: 'YGO Records | Yu-Gi-Oh! popular cards page.',
  keywords: ['Yu-Gi-Oh!', 'Yugioh', 'cards'],
  openGraph: {
    title: 'Popular Cards | YGO Records',
    description: 'YGO Records | Yu-Gi-Oh! popular cards page.',
  },
}

export default function PopularCardsPage() {
  return (
    <main>
      <PopularCardsBanner />
      <PopularCardsDisplay />
    </main>
  )
}
