import { IEvent } from '@/interfaces/event'

const ycsTestData: IEvent[] = [
  {
    id: 1,
    name: 'YCS Bologna 2023',
    type: {
      name: 'YCS',
      slug: 'ycs',
    },
    year: 2023,
    date: 'December 9-10',
    location: 'Bologna, Italy',
    attendance: 2488,
    winner: {
      id: 1,
      name: 'Joshua Schmidt',
      nationality: 'DE',
      deck: {
        id: 1,
        name: 'Runick Bystial',
        archetype: 'Runick',
        engine: ['Bystial'],
        thumbnail: '92107604.jpg',
      },
    },
  },
  {
    id: 2,
    name: 'YCS Richmond 2023',
    type: {
      name: 'YCS',
      slug: 'ycs',
    },
    year: 2023,
    date: 'November 4-5',
    location: 'Richmond, US',
    attendance: 1494,
    winner: {
      id: 2,
      name: 'Joseph Bellafiore',
      nationality: 'US',
      deck: {
        id: 3,
        name: 'Unchained',
        archetype: 'Unchained',
        thumbnail: '24269961.jpg',
      },
    },
  },
]

export default ycsTestData
