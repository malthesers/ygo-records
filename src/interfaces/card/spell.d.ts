import { ICardBase } from '.'

interface ISpellCard extends ICardBase {
  cardType: 'Spell'
  type: SpellType
}

type SpellType = 'Normal' | 'Continuous' | 'Equip' | 'Quick-Play' | 'Field' | 'Ritual'
