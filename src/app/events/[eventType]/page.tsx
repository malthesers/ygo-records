import { EventSlug, IEvent } from '@/interfaces/event'
import { notFound } from 'next/navigation'
import TournamentTable from '@/components/tables/TournamentTable'
import SplashBanner from '@/components/SplashBanner'
import eventInfoData from '@/app/data/event-info'
import getData from '@/services/getData'

export default async function EventTypePage({ params }: { params: { eventType: EventSlug } }) {
  const events = await getData<IEvent[]>(`events/type/${params.eventType}`)

  if (!Object.keys(eventInfoData).includes(params.eventType)) {
    notFound()
  }

  return (
    <main>
      <SplashBanner
        splash={eventInfoData[params.eventType].splash}
        logo={eventInfoData[params.eventType].logo}
        alt='Yu-Gi-Oh! Championship Series'
        clear={params.eventType === 'remote-ycs'}
      />
      {events && <TournamentTable events={events} />}
    </main>
  )
}
