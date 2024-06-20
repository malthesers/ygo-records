import { TrapType } from '@/interfaces/card/trap'
import OptionsInputTemplate from './templates/OptionsInputTemplate'

export default function TrapTypeInput() {
  const trapTypes: TrapType[] = ['Normal', 'Continuous', 'Counter']

  return <OptionsInputTemplate field='type' options={trapTypes} columns={3} />
}
