import ATKInput from './inputs/ATKInput'
import DEFInput from './inputs/DEFInput'
import MonsterTypeInput from './inputs/MonsterTypeInput'

export default function MonsterFilters() {
  return (
    <div className='space-y-4'>
      <MonsterTypeInput />
      <ATKInput />
      <DEFInput />
    </div>
  )
}
