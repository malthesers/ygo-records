'use client'

import { useEffect, useState } from 'react'
import { IEvent } from '@/interfaces/event'
import TournamentRow from './TournamentRow'
import ycsTestData from '@/app/data/ycs'

interface TournamentTableProps {
  events: IEvent[]
}

export default function TournamentTable({ events }: TournamentTableProps) {
  // const [events, setEvents] = useState<IEvent[] | null>()

  // useEffect(() => {
  //   setEvents(ycsTestData)
  // }, [])

  return (
    <table className='w-full'>
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
        {events?.map((event) => (
          <TournamentRow key={event.id} event={event} />
        ))}
      </tbody>
    </table>
  )
}
