import { ICardsQueryParams } from '@/interfaces/query-params'
import useQueryParamsStore from '@/stores/queryParamsStore'

interface RangeInputTemplateProps {
  fieldName: keyof ICardsQueryParams
  fieldNameMin: keyof ICardsQueryParams
  fieldNameMax: keyof ICardsQueryParams
  placeholder: string
  placeholderMin: string
  placeholderMax: string
}

export default function RangeInputTemplate({
  fieldName,
  fieldNameMin,
  fieldNameMax,
  placeholder,
  placeholderMin,
  placeholderMax,
}: RangeInputTemplateProps) {
  const { formValues, updateFormValues } = useQueryParamsStore()

  return (
    <div className='grid grid-cols-2 gap-4'>
      <input
        type='number'
        name={fieldNameMin}
        placeholder={placeholderMin}
        value={formValues[fieldNameMin] as string}
        onChange={(e) => updateFormValues({ ...formValues, [fieldNameMin]: e.target.value })}
      />
      <input
        type='number'
        name={fieldNameMax}
        placeholder={placeholderMax}
        value={formValues[fieldNameMax] as string}
        onChange={(e) => updateFormValues({ ...formValues, [fieldNameMax]: e.target.value })}
      />
    </div>
  )
}
