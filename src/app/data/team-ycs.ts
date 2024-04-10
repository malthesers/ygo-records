import { IEvent } from '@/interfaces/event'

const teamYcsTestData: IEvent[] = [
  {
    _id: '3',
    name: 'TEAM YCS San Jose 2024',
    slug: 'san-jose-2024',
    type: {
      name: 'TEAM YCS',
      slug: 'team-ycs',
    },
    year: 2024,
    date: 'February 17-18',
    location: 'San Jose, Costa Rica',
    attendance: 136,
    winner: {
      _id: '3',
      name: 'Pakawat Pamornsut',
      slug: 'pakawat-pamornsut',
      nationality: 'US',
      deck: {
        _id: '2',
        name: 'Snake-Eye',
        slug: 'snake-eye',
        engines: ['Snake-Eye'],
        thumbnail: '48452496',
      },
    },
    winner2: {
      _id: '4',
      name: 'Kamal Crooks-Valdez',
      slug: 'kamal-crooks-valdez',
      nationality: 'US',
      deck: {
        _id: '2',
        name: 'Snake-Eye',
        slug: 'snake-eye',
        engines: ['Snake-Eye'],
        thumbnail: '48452496',
      },
    },
    winner3: {
      _id: '5',
      name: 'Ruben Penaranda',
      slug: 'ruben-penaranda',
      nationality: 'US',
      deck: {
        _id: '3',
        name: 'Snake-Eye',
        slug: 'snake-eye',
        engines: ['Snake-Eye'],
        thumbnail: '48452496',
      },
    },
  },
  {
    _id: '4',
    name: 'TEAM YCS Las Vegas 2024',
    slug: 'las-vegas-2024',
    type: {
      name: 'TEAM YCS',
      slug: 'team-ycs',
    },
    year: 2024,
    date: 'February 24-25',
    location: 'Las Vegas, NV, US',
    attendance: 571,
    winner: {
      _id: '6',
      name: 'Hani Jawhari',
      slug: 'hani-jawhari',
      nationality: 'US',
      deck: {
        _id: '4',
        name: 'Fire King Snake-Eye',
        slug: 'snake-eye-fire-king',
        engines: ['Fire King', 'Snake-Eye'],
        thumbnail: '66431519',
      },
    },
    winner2: {
      _id: '7',
      name: 'Hisam Jawhari',
      slug: 'hisam-jawhari',
      nationality: 'US',
      deck: {
        _id: '3',
        name: 'Snake-Eye',
        slug: 'snake-eye',
        engines: ['Snake-Eye'],
        thumbnail: '66431519',
      },
    },
    winner3: {
      _id: '8',
      name: 'Chris LeBlanc',
      slug: 'chris-leblanc',
      nationality: 'US',
      deck: {
        _id: '4',
        name: 'Fire King Snake-Eye',
        slug: 'snake-eye-fire-king',
        engines: ['Fire King', 'Snake-Eye'],
        thumbnail: '66431519',
      },
    },
  },
]

export default teamYcsTestData
