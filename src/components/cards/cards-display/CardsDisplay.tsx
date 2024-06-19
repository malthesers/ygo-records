import DisplayedCard from './DisplayedCard'
import useCards from '@/hooks/useCards'

export default function CardsDisplay() {
  const { cards, isLoading, isError } = useCards()

  if (isLoading) return <p>Loading</p>
  if (isError) return <p>Error</p>

  return (
    <div className='w-full h-fit p-4 bg-sky-900'>
      <div className='grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'>
        {cards?.map((card) => (
          <DisplayedCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}
