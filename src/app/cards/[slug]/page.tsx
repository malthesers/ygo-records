import { ICard } from '@/interfaces/card'
import CardInfo from './CardInfo'
import Card from '@/components/card/Card'
import getData from '@/services/getData'
import CardRender from '@/components/card/CardRender'
import DeckTable from '@/components/tables/DeckTable'

export default async function CardPage({ params }: { params: { slug: string } }) {
  const card = await getData<ICard>(`cards/${params.slug}/decks`)

  return (
    <main>
      <section className='flex flex-col lg:flex-row '>
        {/* <Image src={cardart} alt='card art' className='shadow-2xl' /> */}
        {/* {card && <Card card={card} />} */}
        {card && <CardRender card={card} className='mx-auto' />}
        {card && <CardInfo card={card} />}
      </section>
      {card && <DeckTable decks={card.decks} showEvent showPlayer showDeck />}
    </main>
  )
}
