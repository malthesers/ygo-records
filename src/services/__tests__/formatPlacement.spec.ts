import { Placement } from '@/interfaces/deck'
import formatPlacement from '../formatPlacement'

const validPlacement: [Placement, string][] = [
  [1, '1st'],
  [2, '2nd'],
  [4, 'Top 4'],
  [8, 'Top 8'],
  [16, 'Top 16'],
  [32, 'Top 32'],
  [64, 'Top 64'],
  [128, 'Top 128'],
  [256, 'Top 256'],
]
const stringPlacement: string[] = ['1', '2', '4', '8', '16', '32', '64', '128', '256']
const invalidDataType: any[] = [
  true, // Boolean: true
  false, // Boolean: false
  null, // null
  undefined, // undefined
  NaN, // NaN - returns number with typeof
  [1], // Array of valid placement
]
const invalidPlacement: number[] = [
  -1, // Negative of correct value
  0, // 0
  0.5, // Decimal value
  3, // Lower boundary
  254, // Upper boundary -1
  255, // Upper boundary
  257, // Upper boundary +1
]

describe('formatPlacement', () => {
  describe('Valid cases', () => {
    test.each(validPlacement)('returns properly formatted string from placement: %d', (placement, expected) => {
      const formattedPlacement = formatPlacement(placement)

      expect(formattedPlacement).toBe(expected)
    })
  })

  describe('Invalid cases', () => {
    test.each(invalidPlacement)('throws an error for invalid numbers: %d', (placement: any) => {
      expect(() => formatPlacement(placement)).toThrowError(`Invalid placement value: ${placement}.`)
    })

    test.each(stringPlacement)('throws an error for string values of correct numbers: %s', (placement: any) => {
      expect(() => formatPlacement(placement)).toThrowError('Invalid placement value. Must be a number.')
    })

    test.each(invalidDataType)('throws an error for invalid numbers: %o', (placement) => {
      expect(() => formatPlacement(placement)).toThrowError('Invalid placement value. Must be a number.')
    })
  })
})
