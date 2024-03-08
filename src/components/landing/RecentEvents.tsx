'use client'

import recentEventsTest from '@/app/data/recent-events'
import { IRecentEvent } from '@/interfaces/recent-event'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function RecentEvents() {
  const [recentEvents, setRecentEvents] = useState<IRecentEvent[] | null>([])

  useEffect(() => {
    setRecentEvents(recentEventsTest)
  }, [])

  return (
    <aside>
      <h2>Recent Events</h2>
      <div className='bg-sky-900 flex flex-col gap-4'>
        {recentEvents?.map((recentEvent) => (
          <article key={recentEvent.id} className='flex flex-row justify-between p-2'>
            <div>
              <p className='font-semibold'>{recentEvent.eventType.name}</p>
              <p>
                {recentEvent.name} {recentEvent.year}
              </p>
            </div>
            <div className='relative'>
              <Image
                src={`/images/logos/${recentEvent.eventType.slug}.png`}
                alt='event logo'
                width={60}
                height={10}
              ></Image>
            </div>
          </article>
        ))}
      </div>
    </aside>
  )
}
