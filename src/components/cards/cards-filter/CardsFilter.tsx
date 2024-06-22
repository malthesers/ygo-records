import type { FormEvent } from 'react'
import useQueryParamsStore from '@/stores/queryParamsStore'
import NameInput from './inputs/NameInput'
import DescriptionInput from './inputs/DescriptionInput'
import CardTypeInput from './inputs/CardTypeInput'
import Button from '@/components/layout/Button'
import MonsterFilters from './MonsterFilters'
import SpellFilters from './SpellFilters'
import TrapFilters from './TrapFilters'

export default function CardsFilter() {
  const { formValues, resetFormValues, updateQueryParams } = useQueryParamsStore()

  function searchCards(e?: FormEvent<HTMLFormElement>) {
    if (e) e.preventDefault()

    updateQueryParams(formValues)
  }

  return (
    <aside className='max-w-sm w-full h-fit space-y-4 p-4 bg-sky-900'>
      <form onSubmit={searchCards} className='space-y-4'>
        <NameInput />
        <DescriptionInput />
        <CardTypeInput />
        {formValues.cardType === 'Monster' && <MonsterFilters />}
        {formValues.cardType === 'Spell' && <SpellFilters />}
        {formValues.cardType === 'Trap' && <TrapFilters />}
        <button type='submit' className='hidden'></button>
      </form>
      <Button onClick={() => resetFormValues()}>Reset</Button>
      <Button onClick={() => searchCards()}>Search</Button>
    </aside>
  )
}
