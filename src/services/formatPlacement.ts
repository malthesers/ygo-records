import { Placement } from '@/interfaces/deck'

const placements = {
  '1': '1st',
  '2': '2nd',
  '4': 'Top 4',
  '8': 'Top 8',
  '16': 'Top 16',
  '32': 'Top 32',
  '64': 'Top 64',
  '128': 'Top 128',
  '256': 'Top 256',
}

/**
 * Formats the placement of a topping decklist from a number to a readable string.
 *
 * @param placement The top cut placement as a number.
 * @returns The top cut placement formatted to ordinal numbers as a string.
 */
export default function formatPlacement(placement: Placement) {
  if (typeof placement !== 'number') {
    throw new Error('Invalid placement value. Must be a number.')
  }

  if (isNaN(placement)) {
    throw new Error('Invalid placement value. Must be a number.')
  }

  if (!placements.hasOwnProperty(placement.toString())) {
    throw new Error(`Invalid placement value: ${placement}. Must be one of the following: ${Object.keys(placements)}.`)
  }

  return placements[placement]
}
