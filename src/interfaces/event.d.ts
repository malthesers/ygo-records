import { IDeckType } from './deck'
import { IPlayer } from './player'

export interface IEvent {
  _id: string
  name: string
  slug: string
  type: EventType
  year: number
  date: string
  location: string
  attendance: number
  winner: IWinner
  winner2?: IWinner
  winner3?: IWinner
  // structure: {
  //   rounds: number
  //   cutoff: number
  // }
}

interface IWinner extends IPlayer {
  deck: IDeckType
}

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
