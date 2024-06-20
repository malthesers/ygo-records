import { TypeList } from '@/interfaces/input'
import { ICardsQueryParams } from '@/interfaces/query-params'
import useQueryParamsStore from '@/stores/queryParamsStore'
import Image from 'next/image'
import { ChangeEvent } from 'react'

interface OptionsInputTemplateProps<T> {
  field: keyof ICardsQueryParams
  options: TypeList<T>[]
  columns: number
}

export default function OptionsInputTemplate<T>({ field, options, columns }: OptionsInputTemplateProps<T>) {
  const { formValues, updateFormValues } = useQueryParamsStore()

  function updateToggleableField(e: ChangeEvent<HTMLInputElement>) {
    if (formValues[field] === e.target.value) {
      updateFormValues({ [field]: '' })
    } else {
      updateFormValues({ [field]: e.target.value })
    }
  }

  return (
    <div className={`grid gap-4 grid-cols-${columns}`}>
      {options.map((option) => (
        <label
          htmlFor={`input-${option.type}`}
          key={option.type as string}
          className='flex flex-row items-center place-content-center gap-1'
        >
          {option.icon && (
            <Image src={option.icon} alt={`${option.type} icon`} width={48} height={48} className='size-5' />
          )}
          <span>{option.type as string}</span>
          <input
            id={`input-${option.type}`}
            type='checkbox'
            name={field}
            value={option.type as string}
            checked={option.type === formValues[field]}
            onChange={(e) => updateToggleableField(e)}
          />
        </label>
      ))}
    </div>
  )
}
