'use client'

import { EventSlug, IEvent } from '@/interfaces/event'
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'
import TournamentTable from '@/components/tables/TournamentTable'
import SplashBanner from '@/components/SplashBanner'
import teamYcsTestData from '@/app/data/team-ycs'
import ycsTestData from '@/app/data/ycs'
import eventInfoData from '@/app/data/event-info'

export default function EventTypePage({ params }: { params: { eventType: EventSlug } }) {
  const eventSlugs: EventSlug[] = ['wcq', 'ycs', 'team-ycs', 'remote-ycs']
  const [events, setEvents] = useState<IEvent[] | null>()
  const eventInfo = eventInfoData

  if (!eventSlugs.includes(params.eventType)) {
    notFound()
  }

  useEffect(() => {
    if (params.eventType === 'team-ycs') {
      setEvents(teamYcsTestData)
    } else {
      setEvents(ycsTestData)
    }
  }, [])

  return (
    <main>
      <SplashBanner
        splash={eventInfo[params.eventType].splash}
        logo={eventInfo[params.eventType].logo}
        alt='Yu-Gi-Oh! Championship Series'
        clear={params.eventType === 'remote-ycs'}
      />
      {events && <TournamentTable events={events} />}
    </main>
  )
}
