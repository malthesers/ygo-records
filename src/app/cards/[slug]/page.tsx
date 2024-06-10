import { ICard } from '@/interfaces/card'
import { useEffect, useState } from 'react'
import CardInfo from './CardInfo'
import Card from '@/components/card/Card'
import { testCards } from '@/app/data/test-cards'

export default async function CardPage({ params }: { params: { slug: string } }) {
  const response = await fetch('https://ygo-records-api.onrender.com/cards/' + params.slug)
  const card: ICard = await response.json()
  // const [card, setCard] = useState<ICard | null>()

  // console.log('yo')

  // useEffect(() => {
  //   setCard(testCards.find(({ id }) => id.toString() === params.slug))
  // }, [params.slug])

  return (
    <main className='space-y-4'>
      <section className='flex flex-col md:flex-row'>
        {/* <Image src={cardart} alt='card art' className='shadow-2xl' /> */}
        {card && <Card card={card} />}
        {card && <CardInfo card={card} />}
      </section>
    </main>
  )
}
