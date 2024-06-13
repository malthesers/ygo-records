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
 *
 * @param placement The top cut placement as a number.
 * @returns The top cut placement formatted to ordinal numbers as a string.
 */
export default function formatPlacement(placement: Placement) {
  return placements[placement]
}
