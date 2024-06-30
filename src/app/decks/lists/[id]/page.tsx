import { IDeck } from '@/interfaces/deck'
import getData from '@/services/getData'
import DecklistInfo from './DecklistInfo'
import formatMetadata, { Metadata } from '@/services/formatMetadata'
import DecklistDisplay from './DecklistDisplay'
import NoData from '@/components/layout/NoData'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const deck = await getData<IDeck>(`decks/${params.id}`)

  return formatMetadata(`${deck.deckType.name} by ${deck.player.name} at ${deck.event.name}`, 'decklist')
}

export default async function DeckListPage({ params }: { params: { id: string } }) {
  const deck = await getData<IDeck>(`decks/${params.id}`)

  return (
    <main className='space-y-4'>
      {deck && <DecklistInfo deck={deck} />}
      {deck.decklist ? <DecklistDisplay decklist={deck.decklist} /> : <NoData>No decklist available</NoData>}
    </main>
  )
}
