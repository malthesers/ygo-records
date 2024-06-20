import ATKInput from './inputs/ATKInput'
import DEFInput from './inputs/DEFInput'

export default function MonsterFilters() {
  return (
    <div className='space-y-4'>
      <ATKInput />
      <DEFInput />
    </div>
  )
}
