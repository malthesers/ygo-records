import { IEvent } from './event'
import { IPlayer } from './player'

export interface IDeckType {
  _id: string
  name: string
  slug: string
  engines: string[]
  thumbnail: string
}

export interface ITopDeck extends IDeckType {
  topCutPercentage: number
}

export interface IDeck {
  _id: string
  placement: Placement
  deckType: IDeckType
  decklist: IDecklist
  player: IPlayer
  event: IEvent
  additionalEngines?: string[]
}

type Placement = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128

export interface IDecklist {
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
