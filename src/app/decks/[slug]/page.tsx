import { IDeckType } from '@/interfaces/deck'
import DeckInfo from './DeckInfo'
import DeckTable from '@/components/tables/DeckTable'
import getData from '@/services/getData'
import formatMetadata, { Metadata } from '@/services/formatMetadata'

export async function generateMetadata({ params }: { params: { slug: number } }): Promise<Metadata> {
  const deckType = await getData<IDeckType>(`decktypes/${params.slug}/tops`)

  return formatMetadata(deckType.name, 'deck')
}

export default async function DeckTypePage({ params }: { params: { slug: string } }) {
  const deckType = await getData<IDeckType>(`decktypes/${params.slug}/tops`)

  return (
    <main>
      {deckType && <DeckInfo deckType={deckType} />}
      {deckType.decks && <DeckTable decks={deckType.decks} showEvent showPlayer showDeck showEngines />}
    </main>
  )
}
