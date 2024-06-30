import missingDeck from '@/app/data/missingDeck'
import { IDeck, Placement } from '@/interfaces/deck'
import { TopCut } from '@/interfaces/event'

const topcutLimits: { [key in Placement]: number } = {
  1: 1,
  2: 1,
  4: 2,
  8: 4,
  16: 8,
  32: 16,
  64: 32,
  128: 64,
  256: 128,
}

/**
 *
 * @param decks The existing decks to include.
 * @param topcut The total amount of topcut places.
 * @returns An array of decks filled out to the number of topcut places.
 */
export default function fillEventDecks(decks: IDeck[] | [], topcut: TopCut) {
  if (!Array.isArray(decks)) {
    return [missingDeck]
  }

  const deckCount: { [key in Placement]?: number } = {}
  const filledDecks: IDeck[] = [...decks]

  // Initialise deckCount with 0 for each placement in topcut
  for (const placement in topcutLimits) {
    const key = parseInt(placement) as Placement

    if (key <= topcut) {
      deckCount[key] = 0
    }
  }

  // Add existing deck count
  decks.forEach((deck) => {
    deckCount[deck.placement] = (deckCount[deck.placement] || 0) + 1
  })

  // Add remaining missing decks
  for (const placement in deckCount) {
    const key = parseInt(placement) as Placement

    // Total count, existing count and amount to fill
    const requiredCount = topcutLimits[key]
    const currentCount = deckCount[key] || 0
    const missingCount = requiredCount - currentCount

    // Add missing decks with new placement
    Array.from({ length: missingCount }).forEach((n) => filledDecks.push({ ...missingDeck, placement: key }))
  }

  return filledDecks
}
