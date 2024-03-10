import { IDeckType } from './deck'
import { IPlayer } from './player'

export interface IEvent {
  id: number
  name: string
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

type EventType = IEventTypeYCS | IEventTypeTeamYCS | IEventTypeWCQ

interface IWinner extends IPlayer {
  deck: IDeckType
}

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
