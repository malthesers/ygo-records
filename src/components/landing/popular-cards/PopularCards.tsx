'use client'

import { useEffect, useState } from 'react'
import { ICard } from '@/interfaces/card'
import Card from '@/components/card/Card'
import Link from 'next/link'
import { testCards } from '@/app/data/test-cards'

export default function PopularCards() {
  const [popularCards, setPopularCards] = useState<ICard[] | null>([])

  useEffect(() => {
    setPopularCards(testCards)
  }, [])

  return (
    <section>
      <h2>Popular Cards</h2>
      <hr className='mb-4'></hr>
      <div className='mb-4 grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-6'>
        {popularCards?.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      <Link href='/cards' className='text-sm font-semibold uppercase'>
        See all popular cards
      </Link>
    </section>
  )
}
