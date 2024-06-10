'use client'

import { IEvent } from '@/interfaces/event'
import { DateCell, DeckCell, EventCell, PlayerCell } from './cells/'
import AttendanceCell from './cells/AttendanceCell'

interface TournamentTableProps {
  events: IEvent[]
}

export default function TournamentTable({ events }: TournamentTableProps) {
  const duplicatedData = Array.from({ length: 6 }, () => events).flat()

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Tournament</th>
            <th>Attendance</th>
            <th>Winner</th>
            <th>Deck</th>
          </tr>
        </thead>
        <tbody>
          {duplicatedData?.map((event, index) => (
            <tr key={index}>
              <DateCell date={event.date} />
              <EventCell event={event} />
              <AttendanceCell attendance={event.attendance} isTeamYCS={event.type.slug === 'team-ycs'} />
              <PlayerCell player={event.winner} player2={event.winner2} player3={event.winner3} />
              <DeckCell deckType={event.winner.deck} deckType2={event.winner2?.deck} deckType3={event.winner3?.deck} />
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
