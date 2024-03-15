'use client'

import { IEvent } from '@/interfaces/event'
import TournamentRow from './TournamentRow'

interface TournamentTableProps {
  events: IEvent[]
}

export default function TournamentTable({ events }: TournamentTableProps) {
  const duplicatedData = Array.from({ length: 6 }, () => events).flat()

  return (
    <section>
      <table className='w-full'>
        <thead className='border-b-2 border-white'>
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
            <TournamentRow key={index} event={event} />
          ))}
        </tbody>
      </table>
    </section>
  )
}
