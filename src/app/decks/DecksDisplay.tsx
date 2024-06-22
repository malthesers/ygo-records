import TopDeckCard from '@/components/landing/top-decks/TopDeckCard'
import { ITopDeckTypes } from '@/interfaces/deck'
import getData from '@/services/getData'

export default async function DecksDisplay() {
  const topDecks = await getData<ITopDeckTypes>('decktypes/top')

  return (
    <section>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {topDecks.deckTypes.map((topDeck) => (
          <TopDeckCard key={topDeck.slug} topDeck={topDeck} />
        ))}
      </div>
    </section>
  )
}
