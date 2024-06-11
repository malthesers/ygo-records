import { IEvent } from '@/interfaces/event'
import EventInfo from './EventInfo'
import DeckTable from '@/components/tables/DeckTable'
import { IDeck } from '@/interfaces/deck'
import getData from '@/services/getData'

interface IEventInfo extends IEvent {
  decks?: IDeck[]
}

export default async function EventPage({ params }: { params: { slug: string } }) {
  const event = await getData<IEventInfo>(`events/${params.slug}`)

  return (
    <main>
      {event && <EventInfo event={event} />}
      {event.decks && <DeckTable decks={event.decks} showPlayer showDeck showEngines />}
    </main>
  )
}
