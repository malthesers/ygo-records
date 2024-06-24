'use client'

import DisplayedCard from './DisplayedCard'
import Button from '@/components/layout/Button'
import useInfiniteCards from '@/hooks/useInfiniteCards'

export default function CardsDisplay() {
  const { results, size, setSize, isError, isLoading } = useInfiniteCards()

  if (isLoading) return <p>Loading</p>
  if (isError) return <p>Error</p>

  return (
    <div className='w-full h-fit p-4 bg-sky-900'>
      <div className='grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'>
        {results?.map((res) => res.cards?.map((card) => <DisplayedCard key={card.id} card={card} />))}
      </div>
      <Button className='mt-4' onClick={() => setSize(size + 1)}>
        Load more
      </Button>
    </div>
  )
}
