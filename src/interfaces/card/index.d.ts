import { IMonsterCard } from './monster'
import { ISpellCard } from './spell'
import { ITrapCard } from './trap'

export type ICard = IMonsterCard | ISpellCard | ITrapCard

export interface ICardBase {
  id: string
  name: string
  frame: string
  description: string
}