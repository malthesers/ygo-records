'use client'

import { IEvent } from '@/interfaces/event'
import { DateCell, DeckCell, EventCell, PlayerCell, AttendanceCell } from './cells'

interface TournamentTableProps {
  events: IEvent[]
}

export default function TournamentTable({ events }: TournamentTableProps) {
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
          {events?.map((event, index) => (
            <tr key={index}>
              <DateCell startDate={event.startDate} endDate={event.endDate} />
              <EventCell event={event} />
              <AttendanceCell attendance={event.attendance} isTeamYCS={event.type.slug === 'team-ycs'} />
              <PlayerCell
                player={event.winner.player}
                player2={event.winner2?.player}
                player3={event.winner3?.player}
              />
              <DeckCell deck={event.winner.deck} deck2={event.winner2?.deck} deck3={event.winner3?.deck} />
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
