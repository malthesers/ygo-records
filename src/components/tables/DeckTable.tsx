'use client'

import { IDeck } from '@/interfaces/deck'
import PlayerCell from './cells/PlayerCell'
import PlacementCell from './cells/PlacementCell'
import DateCell from './cells/DateCell'
import DeckCell from './cells/DeckCell'
import EventCell from './cells/EventCell'

interface DeckTableProps {
  decks: IDeck[]
  showEvent?: boolean
  showPlayer?: boolean
  showDeck?: boolean
}

export default function DeckTable({ decks, showEvent, showPlayer, showDeck }: DeckTableProps) {
  const duplicatedData = Array.from({ length: 10 }, () => decks).flat()

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Tournament</th>
            <th>Placement</th>
            {showPlayer && <th>Player</th>}
            {showDeck && <th>Deck</th>}
          </tr>
        </thead>
        <tbody>
          {duplicatedData?.map((deck, index) => (
            <tr key={index}>
              <DateCell date={deck.event.date} />
              <EventCell event={deck.event} />
              <PlacementCell placement={deck.placement} />
              {showPlayer && <PlayerCell player={deck.player} />}
              {showDeck && <DeckCell deckType={deck.deckType} />}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
