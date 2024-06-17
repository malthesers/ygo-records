import { IDeck } from '../deck'
import { IMonsterCard } from './monster'
import { ISpellCard } from './spell'
import { ITrapCard } from './trap'

export type ICard = IMonsterCard | ISpellCard | ITrapCard

export type CardType = 'Monster' | 'Spell' | 'Trap'

export interface ICardBase {
  id: string
  name: string
  frame: string
  description: string
  decks?: IDeck[]
}

export type ImageType = 'artwork' | 'render'
