import { IDeck } from '@/interfaces/deck'

const missingDeck: IDeck = {
  _id: '1',
  placement: 1,
  deckType: {
    _id: '1',
    name: 'Unknown',
    slug: 'unknown',
    engines: [],
    thumbnail: '',
  },
  event: {
    _id: '1',
    name: '',
    slug: '',
    type: {
      name: 'YCS',
      slug: 'ycs',
    },
    startDate: '',
    endDate: '',
    location: '',
    attendance: 0,
    winner: {
      player: {
        _id: '1',
        name: 'Unknown',
        slug: '',
        nationality: '',
      },
      deck: {
        _id: '1',
        name: 'Unknown',
        slug: '',
        thumbnail: '',
      },
    },
    thumbnail: '',
    topcut: 64,
  },
  player: {
    _id: '1',
    name: 'Unknown',
    slug: '',
    nationality: '',
  },
}

export default missingDeck
