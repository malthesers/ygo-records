import TopDeckCard from '@/components/landing/top-decks/TopDeckCard'
import { ITopDeckTypes } from '@/interfaces/deck'
import getData from '@/services/getData'

export default async function DecksPage() {
  const topDecks = await getData<ITopDeckTypes>('decktypes/top')

  return (
    <main>
      <section>
        <h1>Decks</h1>
        <div className='flex flex-wrap gap-4'>
          {topDecks.deckTypes.map((topDeck) => (
            <TopDeckCard key={topDeck.slug} topDeck={topDeck} />
          ))}
        </div>
      </section>
    </main>
  )
}
