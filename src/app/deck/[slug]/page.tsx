'use client'

import { useEffect, useState } from 'react'
import { testDeck } from '@/app/data/test-deck'
import CardBox from '@/components/deck/CardBox'
import DeckInfo from '@/components/deck/DeckInfo'
import { IDeck } from '@/interfaces/deck'

export default function DeckPage() {
  const [deck, setDeck] = useState<IDeck | null>()

  useEffect(() => {
    setDeck(testDeck)
  }, [])

  return (
    <main className='space-y-4'>
      {deck && <DeckInfo deck={deck} />}
      {/* <section className='bg-sky-800 grid md:grid-cols-3 gap-4'>
        {deck && <CardBox title='Monsters' cards={deck?.decklist.mainDeck.monsters} />}
        {deck && <CardBox title='Spells' cards={deck?.decklist.mainDeck.spells} />}
        {deck && <CardBox title='Traps' cards={deck?.decklist.mainDeck.traps} />}
      </section>
      <section className='bg-sky-800 grid md:grid-cols-2 gap-4'>
        {deck && <CardBox title='Extra Deck' cards={deck?.decklist.extraDeck} />}
        {deck && <CardBox title='Side Deck' cards={deck?.decklist.sideDeck} />}
      </section> */}
      <section className='bg-sky-800 grid md:grid-cols-2 gap-4'>
        <div className='flex flex-col gap-4'>
          {deck && <CardBox title='Monsters' cards={deck?.decklist.mainDeck.monsters} />}
          {deck && <CardBox title='Spells' cards={deck?.decklist.mainDeck.spells} />}
          {deck && <CardBox title='Traps' cards={deck?.decklist.mainDeck.traps} />}
        </div>
        <div className='flex flex-col gap-4'>
          {deck && <CardBox title='Extra Deck' cards={deck?.decklist.extraDeck} />}
          {deck && <CardBox title='Side Deck' cards={deck?.decklist.sideDeck} />}
        </div>
      </section>
    </main>
  )
}
