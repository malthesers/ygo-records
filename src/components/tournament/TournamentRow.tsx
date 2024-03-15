import { IEvent } from '@/interfaces/event'
import Link from 'next/link'

interface TournamentRowProps {
  event: IEvent
}

export default function TournamentRow({ event }: TournamentRowProps) {
  return (
    <tr className='grid md:table-row text-center'>
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
        <Link href='/decks/0'>{event.winner.deck.name}</Link>
        {event.winner2 && <Link href='/decks/1'>{event.winner2?.deck.name}</Link>}
        {event.winner3 && <Link href='/decks/1'>{event.winner3?.deck.name}</Link>}
      </td>
    </tr>
  )
}
