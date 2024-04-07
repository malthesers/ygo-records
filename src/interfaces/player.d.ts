export interface IPlayer {
  _id: string
  name: string
  nationality: string
  socials?: {
    youtube: string
    twitter: string
    twitch: string
  }
}
