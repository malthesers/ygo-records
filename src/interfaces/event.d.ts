import { IDeckType } from './deck'
import { IPlayer } from './player'

export interface IEvent {
  _id: string
  name: string
  slug: string
  thumbnail: string
  type: EventType
  topcut: TopCut
  year: number
  date: string
  location: string
  attendance: number
  winner: IWinner
  winner2?: IWinner
  winner3?: IWinner
}

interface IWinner {
  player: IPlayer
  deck: IDeck
}

type TopCut = 8 | 16 | 32 | 64 | 128 | 256

export type EventSlug = 'wcq' | 'ycs' | 'team-ycs' | 'remote-ycs'

type EventType = IEventTypeWCQ | IEventTypeYCS | IEventTypeTeamYCS | IEventTypeRemoteYCS

interface IEventTypeWCQ {
  name: 'WCQ'
  slug: 'wcq'
}

interface IEventTypeYCS {
  name: 'YCS'
  slug: 'ycs'
}

interface IEventTypeTeamYCS {
  name: 'TEAM YCS'
  slug: 'team-ycs'
}

interface IEventTypeRemoteYCS {
  name: 'Remote YCS'
  slug: 'remote-ycs'
}
