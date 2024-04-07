import { IEvent } from '@/interfaces/event'

const ycsTestData: IEvent[] = [
  {
    _id: '1',
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
      _id: '1',
      name: 'Joshua Schm_idt',
      nationality: 'DE',
      deck: {
        _id: '1',
        name: 'Runick Bystial',
        engines: ['Runick', 'Bystial'],
        thumbnail: '92107604.jpg',
      },
    },
  },
  {
    _id: '2',
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
      _id: '2',
      name: 'Joseph Bellafiore',
      nationality: 'US',
      deck: {
        _id: '3',
        name: 'Unchained',
        engines: ['Unchained'],
        thumbnail: '24269961.jpg',
      },
    },
  },
]

export default ycsTestData
