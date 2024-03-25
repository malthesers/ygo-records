'use client'

import cardart from '~/images/placeholders/card.webp'
import { testCard } from '@/app/data/test-card'
import { ICard } from '@/interfaces/card'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import CardInfo from './CardInfo'
import Card from '@/components/card/Card'

export default function CardPage({ params }: { params: { slug: number } }) {
  const [card, setCard] = useState<ICard | null>()

  useEffect(() => {
    setCard(testCard)
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
