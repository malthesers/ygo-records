import { ICard } from './card'
import { IEvent } from './event'
import { IPlayer } from './player'

export interface IDeckType {
  _id: string
  name: string
  slug: string
  engines: string[]
  thumbnail: string
  decks?: IDeck[]
}

export interface ITopDeckType extends IDeckType {
  rank: number
  count: number
  percentage: string
  mostSuccessful: {
    placement: Placement
    player: string
    event: string
    _id: string
  }
}

export interface IDeck {
  _id: string
  placement: Placement
  deckType: IDeckType
  decklist?: IDecklist
  player: IPlayer
  event: IEvent
  additionalEngines?: string[]
}

export type Placement = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256

export interface IDecklist {
  mainDeck: IDeckTypeCard[]
  extraDeck: IDeckTypeCard[]
  sideDeck: IDeckTypeCard[]
}

interface IDeckTypeCard {
  count: 1 | 2 | 3
  card: ICard
}
