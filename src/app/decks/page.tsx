import { Metadata } from 'next'
import DecksBanner from './DecksBanner'
import DecksDisplay from './DecksDisplay'

export const metadata: Metadata = {
  title: 'Popular Decks | YGO Records',
  description: 'YGO Records | Yu-Gi-Oh! most popular decks page.',
  keywords: ['Yu-Gi-Oh!', 'Yugioh', 'decks'],
  openGraph: {
    title: 'Popular Decks | YGO Records',
    description: 'YGO Records | Yu-Gi-Oh! most popular decks page.',
  },
}

export default function DecksPage() {
  return (
    <main>
      <DecksBanner />
      <DecksDisplay />
    </main>
  )
}
