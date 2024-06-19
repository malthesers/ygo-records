import useQueryParamsStore from '@/stores/queryParamsStore'
import { FormEvent } from 'react'
import NameInput from './inputs/NameInput'
import DescriptionInput from './inputs/DescriptionInput'
import ATKInput from './inputs/ATKInput'
import DEFInput from './inputs/DEFInput'
import CardTypeInput from './inputs/CardTypeInput'

export default function CardsFilter() {
  const { queryParams, formValues, updateQueryParams } = useQueryParamsStore()

  function searchCards(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    updateQueryParams(formValues)
  }

  console.log(queryParams)

  return (
    <aside className='max-w-sm w-full h-fit p-4 bg-sky-900'>
      <form onSubmit={searchCards} className='space-y-4'>
        <NameInput />
        <DescriptionInput />
        <CardTypeInput />
        <ATKInput />
        <DEFInput />
        <button>Search</button>
      </form>
    </aside>
  )
}
