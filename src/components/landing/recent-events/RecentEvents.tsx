import { IEvent } from '@/interfaces/event'
import RecentEventCard from './RecentEventCard'
import getData from '@/services/getData'
import Link from 'next/link'

export default async function RecentEvents() {
  const recentEvents = await getData<IEvent[]>('events/recent/4')

  return (
    <aside className='flex flex-col'>
      <h2>Recent Events</h2>
      <hr className='mb-4'></hr>
      <div className='flex-grow grid sm:grid-cols-2 xl:grid-cols-1 gap-2 '>
        {recentEvents?.map((event) => (
          <RecentEventCard key={event.name} event={event} />
        ))}
      </div>
      <Link href='/events' className='text-sm font-semibold uppercase mt-4 xl:text-right'>
        See all events
      </Link>
    </aside>
  )
}
