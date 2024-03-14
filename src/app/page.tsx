import RecentEvents from '@/components/landing/recent-events/RecentEvents'
import TopDecks from '@/components/landing/top-decks/TopDecks'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YGOTops',
  description: 'YGOTops',
}

export default function Home() {
  return (
    <main>
      <section className='grid xl:grid-cols-[5fr_2fr] gap-4'>
        <TopDecks />
        <RecentEvents />
      </section>
      <section>
        <h2>Popular Cards</h2>
        <hr></hr>
      </section>
    </main>
  )
}
