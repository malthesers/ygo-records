import { IMonsterCard, MonsterType } from './monster'
import { ISpellCard, SpellType } from './spell'
import { ITrapCard, TrapType } from './trap'
import { IDeck } from '../deck'

export type ICard = IMonsterCard | ISpellCard | ITrapCard

export type CardType = 'Monster' | 'Spell' | 'Trap'

export type Type = MonsterType | SpellType | TrapType

export interface ICardBase {
  id: string
  name: string
  frame: string
  description: string
  decks?: IDeck[]
}

export type ImageType = 'artwork' | 'render'
