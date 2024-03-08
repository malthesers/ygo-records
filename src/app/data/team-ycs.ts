import { IEvent } from '@/interfaces/event'

const teamYcsTestData: IEvent[] = [
  {
    id: 3,
    name: 'TEAM YCS San Jose 2024',
    type: {
      name: 'TEAM YCS',
      slug: 'team-ycs',
    },
    year: 2024,
    date: 'February 17-18',
    location: 'San Jose, Costa Rica',
    attendance: 136,
    winner: {
      id: 3,
      name: 'Pakawat Pamornsut',
      nationality: 'US',
      deck: {
        id: 2,
        name: 'Snake-Eye',
        archetype: 'Snake-Eye',
      },
    },
    winner2: {
      id: 4,
      name: 'Kamal Crooks-Valdez',
      nationality: 'US',
      deck: {
        id: 2,
        name: 'Snake-Eye',
        archetype: 'Snake-Eye',
      },
    },
    winner3: {
      id: 5,
      name: 'Ruben Penaranda',
      nationality: 'US',
      deck: {
        id: 2,
        name: 'Snake-Eye',
        archetype: 'Snake-Eye',
      },
    },
  },
  {
    id: 4,
    name: 'TEAM YCS Las Vegas 2024',
    type: {
      name: 'TEAM YCS',
      slug: 'team-ycs',
    },
    year: 2024,
    date: 'February 24-25',
    location: 'Las Vegas, NV, US',
    attendance: 571,
    winner: {
      id: 6,
      name: 'Hani Jawhari',
      nationality: 'US',
      deck: {
        id: 4,
        name: 'Fire King Snake-Eye',
        archetype: 'Fire King',
        engine: ['Snake-Eye'],
      },
    },
    winner2: {
      id: 7,
      name: 'Hisam Jawhari',
      nationality: 'US',
      deck: {
        id: 3,
        name: 'Snake-Eye',
        archetype: 'Snake-Eye',
      },
    },
    winner3: {
      id: 8,
      name: 'Chris LeBlanc',
      nationality: 'US',
      deck: {
        id: 4,
        name: 'Fire King Snake-Eye',
        archetype: 'Fire King',
        engine: ['Snake-Eye'],
      },
    },
  },
]

export default teamYcsTestData
