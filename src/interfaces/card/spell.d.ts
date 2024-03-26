import { ICardBase } from '.'

interface ISpellCard extends ICardBase {
  cardType: 'Spell'
  type: SpellType
  frame: 'spell'
}

type SpellType = 'Normal' | 'Continuous' | 'Equip' | 'Quick-Play' | 'Field' | 'Ritual'
