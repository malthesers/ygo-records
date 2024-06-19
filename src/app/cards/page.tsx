'use client'

import CardsDisplay from '@/components/cards/cards-display/CardsDisplay'
import CardsFilter from '@/components/cards/cards-filter/CardsFilter'

export default function CardsPage() {
  return (
    <main>
      <section className='flex flex-col md:flex-row gap-4'>
        <CardsFilter />
        <CardsDisplay />
      </section>
    </main>
  )
}
