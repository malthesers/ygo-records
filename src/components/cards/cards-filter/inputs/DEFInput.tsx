import RangeInputTemplate from './templates/RangeInputTemplate'

export default function DEFInput() {
  return (
    <RangeInputTemplate
      fieldName='def'
      fieldNameMin='defMin'
      fieldNameMax='defMax'
      placeholder='DEF'
      placeholderMin='Min. DEF'
      placeholderMax='Max. DEF'
    />
  )
}
