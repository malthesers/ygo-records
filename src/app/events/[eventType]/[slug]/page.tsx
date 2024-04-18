'use client'

import ycsTestData from '@/app/data/ycs'
import { IEvent } from '@/interfaces/event'
import { useEffect, useState } from 'react'
import EventInfo from './EventInfo'
import DeckTable from '@/components/tables/DeckTable'
import { IDeck } from '@/interfaces/deck'
import { testDecks } from '@/app/data/test-decks'

export default function EventPage({ params }: { params: { slug: string } }) {
  const [event, setEvent] = useState<IEvent>()
  const [decks, setDecks] = useState<IDeck[]>()

  useEffect(() => {
    setEvent(ycsTestData[0])
    setDecks(testDecks)
  })

  return (
    <main>
      {event && <EventInfo event={event} />}
      {decks && <DeckTable decks={decks} showPlayer showDeck showEngines />}
    </main>
  )
}
