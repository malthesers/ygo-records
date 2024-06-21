import ATKInput from './inputs/ATKInput'
import AttributeInput from './inputs/AttributeInput'
import DEFInput from './inputs/DEFInput'
import MonsterTypeInput from './inputs/MonsterTypeInput'

export default function MonsterFilters() {
  return (
    <div className='space-y-4'>
      <div className='grid grid-cols-2 gap-4'>
        <MonsterTypeInput />
        <AttributeInput />
      </div>
      <ATKInput />
      <DEFInput />
    </div>
  )
}
