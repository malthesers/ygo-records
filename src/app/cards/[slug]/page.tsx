'use client'

import { testCard } from '@/app/data/test-card'
import { ICard } from '@/interfaces/card'
import { useEffect, useState } from 'react'

export default function CardPage({ params }: { params: { slug: number } }) {
  const [card, setCard] = useState<ICard | null>()

  useEffect(() => {
    setCard(testCard)
  }, [params.slug])

  return (
    <main className='space-y-4'>
      <section className='grid md:grid-cols-[1fr_2fr]'>
        <div>cardimage</div>
      </section>
    </main>
  )
}
