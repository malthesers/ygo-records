export interface IPlayer {
  _id: string
  name: string
  slug: string
  nationality: string
  socials?: {
    youtube: string
    twitter: string
    twitch: string
  }
}
