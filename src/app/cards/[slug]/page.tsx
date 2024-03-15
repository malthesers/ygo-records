'use client'

import { testCard } from '@/app/data/test-card'
import { ICard } from '@/interfaces/card'
import CardInfo from '@/components/card/CardInfo'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import cardart from '~/images/placeholders/card.webp'

export default function CardPage({ params }: { params: { slug: number } }) {
  const [card, setCard] = useState<ICard | null>()

  useEffect(() => {
    setCard(testCard)
  }, [params.slug])

  return (
    <main className='space-y-4'>
      <section className='grid md:grid-cols-[1fr_2fr]'>
        <Image src={cardart} alt='card art' className='shadow-2xl' />
        {card && <CardInfo card={card} />}
      </section>
    </main>
  )
}
