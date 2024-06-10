'use client'

import { IDeck, IDeckType } from '@/interfaces/deck'
import DeckInfo from './DeckInfo'
import { useEffect, useState } from 'react'
import testDeckTypes from '@/app/data/test-deck-types'
import { testDeck } from '@/app/data/test-deck'
import DeckTable from '@/components/tables/DeckTable'

export default function DeckTypePage({ params }: { params: { slug: string } }) {
  const [deckType, setDeckType] = useState<IDeckType | null>()
  const [decks, setDecks] = useState<IDeck[] | null>()

  useEffect(() => {
    setDeckType(testDeckTypes.find(({ slug }) => slug === params.slug))
    setDecks([testDeck])
  }, [params.slug])

  return (
    <main>
      {deckType && <DeckInfo deckType={deckType} />}
      {decks && <DeckTable decks={decks} showPlayer showEngines showDeck showEvent />}
    </main>
  )
}
