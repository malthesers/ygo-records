export interface IRecentEvent {
  id: number
  eventType: IEventYCS | IEventTEAMYCS | IEventWCQ
  name: string
  year: number
  date: string
  // winner: string
  // deck: string
}

interface IEventYCS {
  name: 'YCS'
  slug: 'ycs'
}

interface IEventTEAMYCS {
  name: 'TEAM YCS'
  slug: 'team-ycs'
}

interface IEventWCQ {
  name: 'WCQ'
  slug: 'wcq'
}
