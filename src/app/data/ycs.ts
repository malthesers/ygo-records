import { IEvent } from '@/interfaces/event'

const ycsTestData: IEvent[] = [
  {
    _id: '1',
    name: 'YCS Bologna 2023',
    slug: 'bologna-2023',
    type: {
      name: 'YCS',
      slug: 'ycs',
    },
    year: 2023,
    date: 'December 9-10',
    location: 'Bologna, Italy',
    attendance: 2488,
    winner: {
      _id: '1',
      name: 'Joshua Schmidt',
      slug: 'joshua-schmidt',
      nationality: 'DE',
      deck: {
        _id: '1',
        name: 'Runick Bystial',
        slug: 'runick-bystial',
        engines: ['Runick', 'Bystial'],
        thumbnail: '92107604',
      },
    },
  },
  {
    _id: '2',
    name: 'YCS Richmond 2023',
    slug: 'richmond-2023',
    type: {
      name: 'YCS',
      slug: 'ycs',
    },
    year: 2023,
    date: 'November 4-5',
    location: 'Richmond, US',
    attendance: 1494,
    winner: {
      _id: '2',
      name: 'Joseph Bellafiore',
      slug: 'joseph-bellafiore',
      nationality: 'US',
      deck: {
        _id: '3',
        name: 'Unchained',
        slug: 'unchained',
        engines: ['Unchained'],
        thumbnail: '24269961',
      },
    },
  },
]

export default ycsTestData
