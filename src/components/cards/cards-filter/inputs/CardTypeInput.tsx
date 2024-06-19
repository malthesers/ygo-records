import { CardType } from '@/interfaces/card'
import useQueryParamsStore from '@/stores/queryParamsStore'
import { ChangeEvent } from 'react'

export default function CardTypeInput() {
  const { formValues, updateFormValues } = useQueryParamsStore()
  const cardTypes: CardType[] = ['Monster', 'Spell', 'Trap']

  function updateCardType(e: ChangeEvent<HTMLInputElement>) {
    console.log(formValues.cardType, e.target.value)
    if (formValues.cardType === e.target.value) {
      console.log('empty')
      updateFormValues({ ...formValues, cardType: '' as CardType })
    } else {
      updateFormValues({ ...formValues, cardType: e.target.value as CardType })
    }
  }

  return (
    <div className='grid grid-cols-3 gap-4 text-center'>
      {cardTypes.map((cardType) => (
        <label htmlFor={`input-${cardType}`} key={cardType}>
          <span>{cardType}</span>
          <input
            id={`input-${cardType}`}
            type='checkbox'
            name='cardType'
            value={cardType}
            checked={cardType === formValues.cardType}
            onChange={(e) => updateCardType(e)}
          />
        </label>
      ))}
    </div>
  )
}
