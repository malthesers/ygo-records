import { SpellType } from '@/interfaces/card/spell'
import SelectInputTemplate from './templates/SelectInputTemplate'

export default function SpellTypeInput() {
  const spellTypes: SpellType[] = ['Normal', 'Continuous', 'Equip', 'Quick-Play', 'Field', 'Ritual']

  return (
    <div>
      <SelectInputTemplate options={spellTypes} />
    </div>
  )
}
