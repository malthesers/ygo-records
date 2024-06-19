import RangeInputTemplate from './templates/RangeInputTemplate'

export default function DEFInput() {
  return (
    <RangeInputTemplate
      fieldName='def'
      fieldNameMin='defMin'
      fieldNameMax='defMax'
      placeholder='def'
      placeholderMin='Min. DEF'
      placeholderMax='Max. DEF'
    />
  )
}
