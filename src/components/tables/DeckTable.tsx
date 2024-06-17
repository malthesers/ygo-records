import { IDeck } from '@/interfaces/deck'
import { DateCell, DeckCell, EnginesCell, EventCell, PlacementCell, PlayerCell } from './cells'
import NoData from '../layout/NoData'

interface DeckTableProps {
  decks: IDeck[] | undefined
  showEvent?: boolean
  showPlayer?: boolean
  showDeck?: boolean
  showEngines?: boolean
}

export default function DeckTable({ decks, showEvent, showPlayer, showDeck, showEngines }: DeckTableProps) {
  if (decks?.length === 0 || !decks) return <NoData>No decks found</NoData>

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
          {decks?.map((deck, index) => (
            <tr key={index}>
              {showEvent && <DateCell startDate={deck.event.startDate} endDate={deck.event.endDate} />}
              {showEvent && <EventCell event={deck.event} />}
              <PlacementCell placement={deck.placement} />
              {showPlayer && <PlayerCell player={deck.player} />}
              {showDeck && <DeckCell deck={deck} />}
              {showEngines && <EnginesCell engines={deck.additionalEngines} />}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
