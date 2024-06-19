import RangeInputTemplate from './templates/RangeInputTemplate'

export default function ATKInput() {
  return (
    <RangeInputTemplate
      fieldName='atk'
      fieldNameMin='atkMin'
      fieldNameMax='atkMax'
      placeholder='ATK'
      placeholderMin='Min. ATK'
      placeholderMax='Max. ATK'
    />
  )
}
