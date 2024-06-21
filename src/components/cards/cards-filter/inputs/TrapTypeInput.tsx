import { TrapType } from '@/interfaces/card/trap'
import OptionsInputTemplate from './templates/OptionsInputTemplate'
import trapTypes from '@/app/data/card-info/trapTypes'

export default function TrapTypeInput() {
  return <OptionsInputTemplate<TrapType> field='type' options={trapTypes} columns={1} />
}
