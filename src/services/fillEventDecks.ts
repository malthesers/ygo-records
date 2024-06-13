import { IDeck } from '@/interfaces/deck'
import { TopCut } from '@/interfaces/event'

const missingDeck: IDeck = {
  _id: '1',
  placement: 1,
  deckType: {
    _id: '1',
    name: 'Runick Bystial',
    slug: 'runick-bystial',
    engines: ['Runick', 'Bystial'],
    thumbnail: '92107604',
  },
  event: {
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
      player: {
        _id: '0',
        name: 'Joshua Schmidt',
        slug: 'joshua-schmidt',
        nationality: 'DE',
      },
      deck: {
        _id: '1',
        name: 'Runick Bystial',
        slug: 'runick-bystial',
        engines: ['Runick', 'Bystial'],
        thumbnail: '92107604',
      },
    },
    thumbnail: '',
    topcut: 64,
  },
  player: {
    _id: '1',
    name: 'Unknown',
    slug: '',
    nationality: 'DE',
  },
}

/**
 *
 * @param decks The existing decks to include.
 * @param topcut The total amount of topcut places.
 * @returns An array of decks filled out to the number of topcut places.
 */
export default function fillEventDecks(decks: IDeck[] | unknown, topcut: TopCut) {
  if (!decks) {
    return [missingDeck]
  }

  console.log(decks, topcut)

  const topcutDecks = {}

  const possiblePlacements: number[] = [1, 2, 4, 8, 16, 32, 64, 128, 256]
  const topcutPlacements: number[] = possiblePlacements.filter((placement) => placement <= topcut)

  // const missingDecks = topcut - decks.length

  // for (let i = 0; i < missingDecks; i++) {}

  // topcutPlacements.forEach((placement) => {
  //   let existingDecks = 0;

  //   decks.forEach((deck) => {
  //     if (deck.placement === placement) {

  //     }
  //   })
  // })

  return decks
}
