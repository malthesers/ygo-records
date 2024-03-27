'use client'

import { ICard } from '@/interfaces/card'
import { useEffect, useState } from 'react'
import CardInfo from './CardInfo'
import Card from '@/components/card/Card'
import { testCards } from '@/app/data/test-cards'

export default function CardPage({ params }: { params: { slug: number } }) {
  const [card, setCard] = useState<ICard | null>()

  useEffect(() => {
    setCard(testCards[params.slug])
  }, [params.slug])

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
