import { ICardsQueryParams } from '@/interfaces/query-params'
import useQueryParamsStore from '@/stores/queryParamsStore'

interface StringInputTemplateProps {
  fieldName: keyof ICardsQueryParams
  placeholder: string
}

export default function StringInputTemplate({ fieldName, placeholder }: StringInputTemplateProps) {
  const { formValues, updateFormValues } = useQueryParamsStore()

  return (
    <input
      type='text'
      name={fieldName}
      placeholder={placeholder}
      value={formValues[fieldName] as string}
      onChange={(e) => updateFormValues({ ...formValues, [fieldName]: e.target.value })}
    />
  )
}
