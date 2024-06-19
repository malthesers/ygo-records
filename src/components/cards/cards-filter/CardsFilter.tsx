import useCardsQueryParams from '@/hooks/useCardsQueryParams'

export default function CardsFilter() {
  const { queryParams, updateQueryParams } = useCardsQueryParams()

  return (
    <aside className='min-w-60 p-4 bg-sky-900'>
      <p>yo</p>
    </aside>
  )
}
