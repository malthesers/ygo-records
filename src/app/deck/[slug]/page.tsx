'use client'

import { testDeck } from '@/app/data/test-deck'
import CardBox from '@/components/deck/CardBox'
import CardRow from '@/components/deck/CardRow'
import { IDeckList } from '@/interfaces/deck'
import { useEffect, useState } from 'react'

export default function DeckPage() {
  const [deck, setDeck] = useState<IDeckList | null>()

  useEffect(() => {
    setDeck(testDeck)
  }, [])

  return (
    <main>
      <section className='bg-sky-800 grid md:grid-cols-3 gap-4'>
        {deck && <CardBox title='Monsters' cards={deck?.mainDeck.monsters} />}
        {deck && <CardBox title='Spells' cards={deck?.mainDeck.spells} />}
        {deck && <CardBox title='Traps' cards={deck?.mainDeck.traps} />}
      </section>
    </main>
  )
}
