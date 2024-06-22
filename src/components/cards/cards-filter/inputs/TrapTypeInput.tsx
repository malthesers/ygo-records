import { TrapType } from '@/interfaces/card/trap'
import OptionsInputTemplate from './templates/OptionsInputTemplate'
import { trapTypeIconsList } from '@/app/data/card-info/trapTypes'

export default function TrapTypeInput() {
  return <OptionsInputTemplate<TrapType> field='type' options={trapTypeIconsList} columns={1} />
}
