'use client'

import topDecksTest from '@/app/data/top-decks'
import { IDeckType } from '@/interfaces/deck'
import { useEffect, useState } from 'react'
import TopDeckCard from './TopDeckCard'

export default function TopDecksSection() {
  const [topDecks, setTopDecks] = useState<IDeckType[] | null>()

  useEffect(() => {
    setTopDecks(topDecksTest)
  }, [])

  return (
    <div>
      <h2>Top Decks</h2>
      <hr className='mb-4'></hr>
      <div>
        <div className='grid md:grid-cols-2 gap-4'>
          {topDecks?.map((topDeck) => (
            <TopDeckCard key={topDeck.id} topDeck={topDeck} />
          ))}
        </div>
      </div>
    </div>
  )
}
