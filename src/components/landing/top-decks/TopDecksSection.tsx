'use client'

import topDecksTest from '@/app/data/top-decks'
import { IDeck } from '@/interfaces/deck'
import { useEffect, useState } from 'react'
import TopDeckCard from './TopDeckCard'

export default function TopDecksSection() {
  const [topDecks, setTopDecks] = useState<IDeck[] | null>()

  useEffect(() => {
    setTopDecks(topDecksTest)
  }, [])

  return (
    <section>
      <h2>Top Decks</h2>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
        {topDecks?.map((topDeck) => (
          <TopDeckCard key={topDeck.id} topDeck={topDeck} />
        ))}
      </div>
    </section>
  )
}
