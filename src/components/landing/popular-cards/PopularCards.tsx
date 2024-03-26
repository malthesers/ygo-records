'use client'

import { useEffect, useState } from 'react'
import recentEventsTest from '@/app/data/recent-events'
import { ICard } from '@/interfaces/card'
import { testCard } from '@/app/data/test-card'
import Card from '@/components/card/Card'
import Link from 'next/link'

export default function PopularCards() {
  const [popularCards, setPopularCards] = useState<ICard[] | null>([])

  useEffect(() => {
    setPopularCards([testCard, testCard, testCard, testCard, testCard, testCard])
  }, [])

  return (
    <section>
      <h2>Popular Cards</h2>
      <hr className='mb-4'></hr>
      <div className='grid gap-2 grid-cols-3 sm:grid-cols-3 md:grid-cols-6'>
        {popularCards?.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      <h2 className='mt-4'>Popular Cards</h2>
      <hr className='mb-4'></hr>
      <div className='grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-6'>
        {popularCards?.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      <h2 className='mt-4'>Popular Cards</h2>
      <hr className='mb-4'></hr>
      <div className='grid gap-2 grid-cols-1 sm:grid-cols-3 md:grid-cols-6'>
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
