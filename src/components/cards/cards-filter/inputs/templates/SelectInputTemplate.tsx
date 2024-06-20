import { TypeList } from '@/interfaces/input'
import { ICardsQueryParams } from '@/interfaces/query-params'
import useQueryParamsStore from '@/stores/queryParamsStore'

interface SelectInputTemplateProps<T> {
  field: keyof ICardsQueryParams
  options: TypeList<T>[]
}

export default function SelectInputTemplate<T>({ field, options }: SelectInputTemplateProps<T>) {
  const { formValues, updateFormValues } = useQueryParamsStore()

  return (
    <select onChange={(e) => updateFormValues({ ...formValues, [field]: e.target.value })}>
      <option value=''></option>
      {options.map((option) => (
        <option key={option.type as string} value={option.type as string}>
          {option.type as string}
        </option>
      ))}
    </select>
  )
}
