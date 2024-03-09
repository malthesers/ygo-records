'use client'

import { useEffect, useState } from 'react'
import { ITestDeck, testDeck } from '../data/test-deck'

export default function DeckPage() {
  const [deck, setDeck] = useState<ITestDeck | null>()

  useEffect(() => {
    setDeck(testDeck)
  }, [])

  return (
    <main>
      <p>deck</p>
    </main>
  )
}
