import { CardType } from '@/interfaces/card'
import useQueryParamsStore from '@/stores/queryParamsStore'
import { ChangeEvent } from 'react'

export default function CardTypeInput() {
  const { formValues, updateFormValues } = useQueryParamsStore()
  const cardTypes: CardType[] = ['Monster', 'Spell', 'Trap']

  return (
    <div className='grid grid-cols-3 gap-4 text-center'>
      {cardTypes.map((cardType) => (
        <label htmlFor={`input-${cardType}`} key={cardType}>
          <span>{cardType}</span>
          <input
            id={`input-${cardType}`}
            type='radio'
            name='cardType'
            value={cardType}
            onChange={(e) => updateFormValues({ ...formValues, cardType: e.target.value as CardType })}
          />
        </label>
      ))}
    </div>
  )
}
