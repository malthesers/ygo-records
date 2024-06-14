import RecentEventCard from './RecentEventCard'
import { IEvent } from '@/interfaces/event'
import getData from '@/services/getData'

export default async function RecentEvents() {
  const recentEvents = await getData<IEvent[]>('events/recent/4')

  return (
    <aside>
      <h2>Recent Events</h2>
      <hr className='mb-4'></hr>
      <div className='flex flex-wrap justify-center gap-2'>
        {recentEvents?.map((event) => (
          <RecentEventCard key={event.name} event={event} />
        ))}
      </div>
    </aside>
  )
}
