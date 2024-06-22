import { EventSlug, IEvent } from '@/interfaces/event'
import { notFound } from 'next/navigation'
import TournamentTable from '@/components/tables/TournamentTable'
import LogoBanner from '@/components/LogoBanner'
import eventInfo from '@/app/data/eventInfo'
import getData from '@/services/getData'
import formatMetadata, { Metadata } from '@/services/formatMetadata'

export async function generateMetadata({ params }: { params: { eventType: EventSlug } }): Promise<Metadata> {
  return formatMetadata(eventInfo[params.eventType].title, 'event')
}

export default async function EventTypePage({ params }: { params: { eventType: EventSlug } }) {
  const events = await getData<IEvent[]>(`events/type/${params.eventType}`)

  if (!Object.keys(eventInfo).includes(params.eventType)) {
    notFound()
  }

  return (
    <main>
      <LogoBanner
        splash={eventInfo[params.eventType].splash}
        logo={eventInfo[params.eventType].logo}
        alt='Yu-Gi-Oh! Championship Series'
        clear={params.eventType === 'remote-ycs'}
      />
      {events && <TournamentTable events={events} />}
    </main>
  )
}
