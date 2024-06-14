import { CardType } from '@/interfaces/card'
import { IDeckTypeCard } from '@/interfaces/deck'

/**
 * Returns a filtered array of card by passed card type.
 *
 * @param mainDeck An array of cards including count and card properties.
 * @param cardType The card type to filter the array of cards by, i.e. Monster, Spell or Trap.
 * @returns An array of cards of the passed card type.
 */
export default function filterByCardType(mainDeck: IDeckTypeCard[], cardType: CardType) {
  return mainDeck.filter((card) => card.card.cardType === cardType)
}
