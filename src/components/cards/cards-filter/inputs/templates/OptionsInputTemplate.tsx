import { ICardsQueryParams } from '@/interfaces/query-params'
import useQueryParamsStore from '@/stores/queryParamsStore'
import { ChangeEvent } from 'react'

interface OptionsInputTemplateProps {
  field: keyof ICardsQueryParams
  options: string[]
  columns: number
}

export default function OptionsInputTemplate({ field, options, columns }: OptionsInputTemplateProps) {
  const { formValues, updateFormValues } = useQueryParamsStore()

  function updateField(e: ChangeEvent<HTMLInputElement>) {
    if (formValues[field] === e.target.value) {
      updateFormValues({ ...formValues, [field]: '' })
    } else {
      updateFormValues({ ...formValues, [field]: e.target.value })
    }
  }

  return (
    <div className={`text-center grid gap-4 grid-cols-${columns}`}>
      {options.map((option) => (
        <label htmlFor={`input-${option}`} key={option}>
          <span>{option}</span>
          <input
            id={`input-${option}`}
            type='checkbox'
            name={field}
            value={option}
            checked={option === formValues[field]}
            onChange={(e) => updateField(e)}
          />
        </label>
      ))}
    </div>
  )
}
