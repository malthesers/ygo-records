'use client'

import { ITestDeck, testDeck } from '@/app/data/test-deck'
import { useEffect, useState } from 'react'

export default function DeckPage() {
  const [deck, setDeck] = useState<ITestDeck | null>()

  useEffect(() => {
    setDeck(testDeck)
  }, [])

  return (
    <main>
      <p>yo</p>
    </main>
  )
}
