import PopularCards from '@/components/landing/popular-cards/PopularCards'
import RecentEvents from '@/components/landing/recent-events/RecentEvents'
import TopDecks from '@/components/landing/top-decks/TopDecks'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YGO Records',
  description: 'YGO Records | Yu-Gi-Oh! deck, event and player database',
  keywords: ['Yu-Gi-Oh!', 'Yugioh'],
  openGraph: {
    title: 'YGO Records',
    description: 'YGO Records | Yu-Gi-Oh! deck, event and player database',
  },
}

export default function Home() {
  return (
    <main>
      <section className='grid xl:grid-cols-[5fr_2fr] gap-4'>
        <TopDecks />
        <RecentEvents />
      </section>
      <PopularCards />
    </main>
  )
}
