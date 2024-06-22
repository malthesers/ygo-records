import { ICard } from '@/interfaces/card'
import CardInfo from './CardInfo'
import getData from '@/services/getData'
import CardRender from '@/components/card/CardRender'
import DeckTable from '@/components/tables/DeckTable'

export default async function CardPage({ params }: { params: { slug: string } }) {
  const card = await getData<ICard>(`cards/${params.slug}/decks`)

  return (
    <main>
      <section className='flex flex-col lg:flex-row '>
        {card && <CardRender card={card} className='mx-auto' />}
        {card && <CardInfo card={card} />}
      </section>
      {card && <DeckTable decks={card.decks} showEvent showPlayer showDeck />}
    </main>
  )
}
