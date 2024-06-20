import { SpellType } from '@/interfaces/card/spell'
import OptionsInputTemplate from './templates/OptionsInputTemplate'

export default function SpellTypeInput() {
  const spellTypes: SpellType[] = ['Normal', 'Continuous', 'Equip', 'Quick-Play', 'Field', 'Ritual']

  return <OptionsInputTemplate field='type' options={spellTypes} columns={2} />
}
