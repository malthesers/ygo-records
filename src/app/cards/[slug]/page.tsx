import { ICard } from '@/interfaces/card'
import CardInfoPanel from './CardInfoPanel'
import getData from '@/services/getData'
import CardRender from '@/components/card/CardRender'
import DeckTable from '@/components/tables/DeckTable'
import formatMetadata, { Metadata } from '@/services/formatMetadata'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const card = await getData<ICard>(`cards/${params.slug}/decks`)

  return formatMetadata(card.name, 'card')
}

export default async function CardPage({ params }: { params: { slug: string } }) {
  const card = await getData<ICard>(`cards/${params.slug}/decks`)

  return (
    <main>
      <section className='flex flex-col lg:flex-row '>
        {card && <CardRender card={card} className='m-auto' />}
        {card && <CardInfoPanel card={card} />}
      </section>
      {card && <DeckTable decks={card.decks} showEvent showPlayer showDeck />}
    </main>
  )
}
