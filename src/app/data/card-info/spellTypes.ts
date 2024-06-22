import { SpellType } from '@/interfaces/card/spell'
import { IconList, IconMap } from '@/interfaces/icons'
import NormalIcon from '~/images/spell-trap-icons/normal.svg'
import ContinuousIcon from '~/images/spell-trap-icons/continuous.webp'
import EquipIcon from '~/images/spell-trap-icons/equip.webp'
import QuickyPlayIcon from '~/images/spell-trap-icons/quick-play.webp'
import FieldIcon from '~/images/spell-trap-icons/field.webp'
import RitualIcon from '~/images/spell-trap-icons/ritual.webp'

export const spellTypeIconsMap: IconMap<SpellType> = {
  Normal: NormalIcon,
  Continuous: ContinuousIcon,
  Equip: EquipIcon,
  'Quick-Play': QuickyPlayIcon,
  Field: FieldIcon,
  Ritual: RitualIcon,
}

export const spellTypeIconsList: IconList<SpellType>[] = [
  { type: 'Normal' },
  { type: 'Continuous', icon: ContinuousIcon },
  { type: 'Equip', icon: EquipIcon },
  { type: 'Quick-Play', icon: QuickyPlayIcon },
  { type: 'Field', icon: FieldIcon },
  { type: 'Ritual', icon: RitualIcon },
]
