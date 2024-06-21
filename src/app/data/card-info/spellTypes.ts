import { SpellType } from '@/interfaces/card/spell'
import { TypeList } from '@/interfaces/input'
import ContinuousIcon from '~/images/spell-trap-icons/continuous.webp'
import EquipIcon from '~/images/spell-trap-icons/equip.webp'
import QuickyPlayIcon from '~/images/spell-trap-icons/quick-play.webp'
import FieldIcon from '~/images/spell-trap-icons/field.webp'
import RitualIcon from '~/images/spell-trap-icons/ritual.webp'

export const spellTypes: TypeList<SpellType>[] = [
  { type: 'Normal' },
  { type: 'Continuous', icon: ContinuousIcon },
  { type: 'Equip', icon: EquipIcon },
  { type: 'Quick-Play', icon: QuickyPlayIcon },
  { type: 'Field', icon: FieldIcon },
  { type: 'Ritual', icon: RitualIcon },
]

export default spellTypes
