import CardRender from '@/components/card/CardRender'
import useCards from '@/hooks/useCards'
import DisplayedCard from './DisplayedCard'
import useCardsQueryParams from '@/hooks/useCardsQueryParams'
import { useState } from 'react'
import useAPI from '@/hooks/useAPI'
import useQueryParamsStore from '@/stores/queryParamsStore'

export default function CardsDisplay() {
  // const { queryParamsString } = useCardsQueryParams()
  // const [query, setQuery] = useState<string>('name=dante')
  // const { cards, isLoading, isError } = useCards('/cards?' + query)

  const { updateQueryParams } = useQueryParamsStore()

  const { cards, isLoading, isError } = useCards()

  if (isLoading) return <p>Loading</p>
  if (isError) return <p>Error</p>

  return (
    <div className='w-full p-4 bg-sky-900'>
      <button onClick={() => updateQueryParams({ name: 'burning' })}>uypdate</button>

      <div className=' grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'>
        {cards?.map((card) => (
          <DisplayedCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}
