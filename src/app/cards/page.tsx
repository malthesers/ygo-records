import CardsDisplay from '@/components/cards/cards-display/CardsDisplay'
import CardsFilter from '@/components/cards/cards-filter/CardsFilter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Card Search | YGO Records',
  description: 'YGO Records | Yu-Gi-Oh! card search page - find your new tech.',
  keywords: ['Yu-Gi-Oh!', 'Yugioh', 'cards'],
  openGraph: {
    title: 'Card Search | YGO Records',
    description: 'YGO Records | Yu-Gi-Oh! card search page - find your new tech.',
  },
}

export default async function CardsPage() {
  return (
    <main>
      <section className='flex flex-col md:flex-row gap-4'>
        <CardsFilter />
        <CardsDisplay />
      </section>
    </main>
  )
}
