import { IEvent } from './event'
import { IPlayer } from './player'

export interface IDeckType {
  id: number
  name: string
  archetype: string
  engine?: string[]
  thumbnail: string
}

export interface ITopDeck extends IDeckType {
  topCutPercentage: number
}

export interface IDeck extends IDeckType {
  decklist: IDeckList
  player: IPlayer
  event: IEvent
  place: Place
}

type Place = '1st' | '2nd' | 'Top 4' | 'Top 8' | 'Top 16' | 'Top 32' | 'Top 64' | 'Top 128'

export interface IDeckList {
  mainDeck: {
    monsters: IDeckTypeCard[]
    spells: IDeckTypeCard[]
    traps: IDeckTypeCard[]
  }
  extraDeck: IDeckTypeCard[]
  sideDeck: IDeckTypeCard[]
}

interface IDeckTypeCard {
  name: string
  count: 1 | 2 | 3
}
