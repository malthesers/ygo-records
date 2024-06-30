import { ICard } from '@/interfaces/card'
import { IDeckTypeCard } from '@/interfaces/deck'

/**
 * Returns an array of cards flattened to individual cards for each occurence.
 * E.g. a card with count 2 will be subtracted to 2 individual cards in the array.
 *
 * @param cards An array of cards including count and card properties.
 * @returns An array of individual cards, duplicated by their count.
 */
export default function flattenCards(cards: IDeckTypeCard[]): ICard[] {
  return cards.flatMap((card) => Array(card.count).fill(card.card))
}
