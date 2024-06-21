import { TypeList } from '@/interfaces/input'
import { ICardsQueryParams } from '@/interfaces/query-params'
import useQueryParamsStore from '@/stores/queryParamsStore'
import Image from 'next/image'

interface SelectInputTemplateProps<T> {
  field: keyof ICardsQueryParams
  options: TypeList<T>[]
  defaultValue: string
}

export default function SelectInputTemplate<T>({ field, options, defaultValue }: SelectInputTemplateProps<T>) {
  const { formValues, updateFormValues } = useQueryParamsStore()

  return (
    <select
      className={formValues[field] === '' ? 'text-gray-400' : ''}
      onChange={(e) => updateFormValues({ [field]: e.target.value })}
    >
      <option value='' className='text-gray-400'>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.type as string} value={option.type as string} className='text-white'>
          {/* {option.icon && (
            <Image src={option.icon} alt={`${option.type} icon`} width={48} height={48} className='size-5' />
          )} */}
          {option.type as string}
        </option>
      ))}
    </select>
  )
}
