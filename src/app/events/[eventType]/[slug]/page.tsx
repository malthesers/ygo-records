import { IEvent } from '@/interfaces/event'
import EventInfo from './EventInfo'
import DeckTable from '@/components/tables/DeckTable'
import { IDeck } from '@/interfaces/deck'
import getData from '@/services/getData'
import formatMetadata, { Metadata } from '@/services/formatMetadata'
import fillEventDecks from '@/services/fillEventDecks'

interface IEventInfo extends IEvent {
  decks?: IDeck[]
}

export async function generateMetadata({ params }: { params: { slug: number } }): Promise<Metadata> {
  const event = await getData<IEventInfo>(`events/${params.slug}`)

  return formatMetadata(event.name, 'event')
}

export default async function EventPage({ params }: { params: { slug: string } }) {
  const event = await getData<IEventInfo>(`events/${params.slug}`)
  const decks = fillEventDecks(event.decks || [], event.topcut)

  return (
    <main>
      {event && <EventInfo event={event} />}
      {event.decks && <DeckTable decks={decks} showPlayer showDeck showEngines />}
    </main>
  )
}
