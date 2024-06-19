import type { FormEvent } from 'react'
import useQueryParamsStore from '@/stores/queryParamsStore'
import NameInput from './inputs/NameInput'
import DescriptionInput from './inputs/DescriptionInput'
import ATKInput from './inputs/ATKInput'
import DEFInput from './inputs/DEFInput'
import CardTypeInput from './inputs/CardTypeInput'
import Button from '@/components/layout/Button'

export default function CardsFilter() {
  const { queryParams, formValues, resetFormValues, updateQueryParams } = useQueryParamsStore()

  function searchCards(e?: FormEvent<HTMLFormElement>) {
    if (e) e.preventDefault()

    updateQueryParams(formValues)
  }

  console.log(formValues)

  return (
    <aside className='max-w-sm w-full h-fit space-y-4 p-4 bg-sky-900'>
      <form onSubmit={searchCards} className='space-y-4'>
        <NameInput />
        <DescriptionInput />
        <CardTypeInput />
        <ATKInput />
        <DEFInput />
        <button type='submit' className='hidden'></button>
      </form>
      <Button onClick={() => resetFormValues()}>Reset</Button>
      <Button onClick={() => searchCards()}>Search</Button>
    </aside>
  )
}
