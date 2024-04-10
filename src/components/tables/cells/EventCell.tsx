import { IEvent } from '@/interfaces/event'
import Link from 'next/link'

interface EventCellProps {
  event: IEvent
}

export default function EventCell({ event }: EventCellProps) {
  return (
    <td className='text-xl font-semibold md:text-lg md:font-normal'>
      <Link href={`/tournaments/${event.type.slug}/${event.slug}`}>{event.name}</Link>
    </td>
  )
}
