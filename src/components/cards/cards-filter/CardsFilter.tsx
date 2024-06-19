import useCardsQueryParams from '@/hooks/useCardsQueryParams'
import { ICardsQueryParams } from '@/interfaces/query-params'
import useQueryParamsStore from '@/stores/queryParamsStore'
import { FormEvent, useState } from 'react'

export default function CardsFilter() {
  const { updateQueryParams } = useQueryParamsStore()

  const [formValues, setFormValues] = useState<ICardsQueryParams>({
    name: '',
  })

  function searchCards(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    updateQueryParams(formValues)
  }

  return (
    <aside className='min-w-60 h-fit p-4 bg-sky-900'>
      <form onSubmit={searchCards}>
        <label htmlFor='name'>name</label>
        <input
          id='name'
          type='text'
          value={formValues.name}
          onChange={(e) => setFormValues({ name: e.target.value })}
        />
        <button>Search</button>
      </form>
    </aside>
  )
}
