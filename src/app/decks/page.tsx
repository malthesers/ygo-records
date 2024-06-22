import TopDeckCard from '@/components/landing/top-decks/TopDeckCard'
import { ITopDeckTypes } from '@/interfaces/deck'
import getData from '@/services/getData'
import DecksBanner from './DecksBanner'

export default async function DecksPage() {
  const topDecks = await getData<ITopDeckTypes>('decktypes/top')

  return (
    <main>
      <DecksBanner />
      <section>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {topDecks.deckTypes.map((topDeck) => (
            <TopDeckCard key={topDeck.slug} topDeck={topDeck} />
          ))}
        </div>
      </section>
    </main>
  )
}
