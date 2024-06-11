import { ITopDeckType } from '@/interfaces/deck'
import TopDeckCard from './TopDeckCard'
import Link from 'next/link'
import getData from '@/services/getData'

interface ITopDeckTypes {
  totalDecks: number
  deckTypes: ITopDeckType[]
}

export default async function TopDecksSection() {
  const topDecks = await getData<ITopDeckTypes>('decktypes/top')

  return (
    <div>
      <h2>Top Decks</h2>
      <hr className='mb-4'></hr>
      <div>
        <div className='grid md:grid-cols-2 gap-4 mb-4'>
          {topDecks.deckTypes.slice(0, 6).map((topDeck) => (
            <TopDeckCard key={topDeck.slug} topDeck={topDeck} />
          ))}
        </div>
      </div>
      <Link href='/decks' className='text-sm font-semibold uppercase'>
        See all decks
      </Link>
    </div>
  )
}
