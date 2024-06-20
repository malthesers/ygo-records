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

  function shorten(value: string) {
    return value.length > 4 ? value.substring(0, 4) : value
  }

  return (
    <div className='grid grid-cols-2 gap-4'>
      {/* <input
        type='number'
        name={fieldName}
        placeholder={placeholder}
        value={formValues[fieldName] as number}
        onChange={(e) => updateFormValues({  [fieldName]: shorten(e.target.value) })}
      /> */}
      <input
        type='number'
        name={fieldNameMin}
        placeholder={placeholderMin}
        value={formValues[fieldNameMin] as number}
        onChange={(e) => updateFormValues({ [fieldNameMin]: shorten(e.target.value) })}
      />
      <input
        type='number'
        name={fieldNameMax}
        placeholder={placeholderMax}
        value={formValues[fieldNameMax] as number}
        onChange={(e) => updateFormValues({ [fieldNameMax]: shorten(e.target.value) })}
      />
    </div>
  )
}
