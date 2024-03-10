'use client'

import { useEffect, useState } from 'react'
import RecentEventCard from './RecentEventCard'
import { IEvent } from '@/interfaces/event'
import recentEventsTest from '@/app/data/recent-events'

export default function RecentEvents() {
  const [recentEvents, setRecentEvents] = useState<IEvent[] | null>([])

  useEffect(() => {
    setRecentEvents(recentEventsTest)
  }, [])

  return (
    <aside>
      <h2>Recent Events</h2>
      <hr className='mb-4'></hr>
      <div className='flex flex-col gap-4'>
        {recentEvents?.map((event) => (
          <RecentEventCard key={event.name} event={event} />
        ))}
      </div>
    </aside>
  )
}
