import { IRecentEvent } from '@/interfaces/recent-event'

const recentEventsTest: IRecentEvent[] = [
  {
    id: 2,
    eventType: {
      name: 'TEAM YCS',
      slug: 'team-ycs',
    },
    name: 'Las Vegas',
    year: 2024,
    date: 'February 24-25',
    // winner: 'Jawhari Bros',
    // deck: 'Fire King Snake-Eye',
  },
  {
    id: 1,
    eventType: {
      name: 'TEAM YCS',
      slug: 'team-ycs',
    },
    name: 'Costa Rica',
    year: 2024,
    date: 'February 17-18',
    // winner: 'Pakapakapakawat',
    // deck: 'Snake-Eye',
  },
]

export default recentEventsTest
