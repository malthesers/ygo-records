import { IDeck } from './deck'

export interface IPlayer {
  _id: string
  name: string
  slug: string
  nationality: string
  socials?: ISocials
  decks?: IDeck[]
}

export interface ISocials {
  youtube: string
  twitter: string
  twitch: string
}
