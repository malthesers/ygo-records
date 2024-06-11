'use client'

import { IDeck } from '@/interfaces/deck'
import { DateCell, DeckCell, EnginesCell, EventCell, PlacementCell, PlayerCell } from './cells'

interface DeckTableProps {
  decks: IDeck[]
  showEvent?: boolean
  showPlayer?: boolean
  showDeck?: boolean
  showEngines?: boolean
}

export default function DeckTable({ decks, showEvent, showPlayer, showDeck, showEngines }: DeckTableProps) {
  const duplicatedData = Array.from({ length: 10 }, () => decks).flat()

  return (
    <section>
      <table>
        <thead>
          <tr>
            {showEvent && <th>Date</th>}
            {showEvent && <th>Tournament</th>}
            <th>Placement</th>
            {showPlayer && <th>Player</th>}
            {showDeck && <th>Deck</th>}
            {showEngines && <th>Engines</th>}
          </tr>
        </thead>
        <tbody>
          {duplicatedData?.map((deck, index) => (
            <tr key={index}>
              {showEvent && <DateCell date={deck.event.date} />}
              {showEvent && <EventCell event={deck.event} />}
              <PlacementCell placement={deck.placement} />
              {showPlayer && <PlayerCell player={deck.player} />}
              {showDeck && <DeckCell deckType={deck.deckType} />}
              {showEngines && <EnginesCell engines={deck.additionalEngines} />}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
