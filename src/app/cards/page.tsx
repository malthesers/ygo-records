'use client'

import CardsDisplay from '@/components/cards/cards-display/CardsDisplay'
import CardsFilter from '@/components/cards/cards-filter/CardsFilter'
import useCards from '@/hooks/useCards'

export default function CardsPage() {
  // const [cards, setCards] = useState<ICard[]>([])
  const { cards, isLoading, isError } = useCards()

  console.log(cards)

  if (isLoading) return <p>Loading</p>
  if (isError) return <p>Error</p>

  return (
    <main>
      <section className='flex flex-col md:flex-row gap-4'>
        <CardsFilter />
        <CardsDisplay />
      </section>
    </main>
  )
}
