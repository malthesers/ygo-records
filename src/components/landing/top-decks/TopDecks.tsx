'use client'

import topDecksTest from '@/app/data/top-decks'
import { IDeckType, ITopDeck } from '@/interfaces/deck'
import { useEffect, useState } from 'react'
import TopDeckCard from './TopDeckCard'
import Link from 'next/link'

export default function TopDecksSection() {
  const [topDecks, setTopDecks] = useState<ITopDeck[] | null>()

  useEffect(() => {
    setTopDecks(topDecksTest)
  }, [])

  return (
    <div>
      <h2>Top Decks</h2>
      <hr className='mb-4'></hr>
      <div>
        <div className='grid md:grid-cols-2 gap-4 mb-4'>
          {topDecks?.map((topDeck) => (
            <TopDeckCard key={topDeck.id} topDeck={topDeck} />
          ))}
        </div>
      </div>
      <Link href='/decks' className='text-sm font-semibold uppercase'>
        See all decks
      </Link>
    </div>
  )
}
