'use client'

import { IEvent } from '@/interfaces/event'
import Link from 'next/link'

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
              <td className='hidden md:table-cell'>{event.date}</td>
              <td className='text-xl font-semibold md:text-lg md:font-normal'>
                <Link href='/'>{event.name}</Link>
              </td>
              <td className='hidden md:table-cell'>
                {event.attendance} {event.type.slug === 'team-ycs' && 'teams'}
              </td>
              <td className='*:block'>
                <Link href='/players/0'>{event.winner.name}</Link>
                {event.winner2 && <Link href='/players/0'>{event.winner2?.name}</Link>}
                {event.winner3 && <Link href='/players/0'>{event.winner3?.name}</Link>}
              </td>
              <td className='*:block'>
                <Link href='/decks/lists/0'>{event.winner.deck.name}</Link>
                {event.winner2 && <Link href='/decks/lists/1'>{event.winner2?.deck.name}</Link>}
                {event.winner3 && <Link href='/decks/lists/1'>{event.winner3?.deck.name}</Link>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
