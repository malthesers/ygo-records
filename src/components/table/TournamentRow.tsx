import { IEvent } from '@/interfaces/event'
import Link from 'next/link'

interface TournamentRowProps {
  event: IEvent
}

export default function TournamentRow({ event }: TournamentRowProps) {
  return (
    <tr className='text-center'>
      <td>{event.date}</td>
      <td>
        <Link href='/'>{event.name}</Link>
      </td>
      <td>
        {event.attendance} {event.type.slug === 'team-ycs' && 'teams'}
      </td>
      <td className='*:block'>
        <Link href='/'>{event.winner.name}</Link>
        {event.winner2 && <Link href='/'>{event.winner2?.name}</Link>}
        {event.winner3 && <Link href='/'>{event.winner3?.name}</Link>}
      </td>
      <td className='*:block'>
        <Link href='/'>{event.winner.deck.name}</Link>
        {event.winner2 && <Link href='/'>{event.winner2?.deck.name}</Link>}
        {event.winner3 && <Link href='/'>{event.winner3?.deck.name}</Link>}
      </td>
    </tr>
  )
}
