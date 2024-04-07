'use client'

import { IDeckType } from '@/interfaces/deck'
import DeckInfo from './DeckInfo'
import { useEffect, useState } from 'react'
import testDeckTypes from '@/app/data/test-deck-types'

export default function DeckTypePage({ params }: { params: { slug: string } }) {
  const [deckType, setDeckType] = useState<IDeckType | null>()

  useEffect(() => {
    setDeckType(testDeckTypes.find(({ slug }) => slug === params.slug))
  }, [params.slug])

  return <main>{deckType && <DeckInfo deckType={deckType} />}</main>
}
