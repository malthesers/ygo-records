import getYGOProImageUrl from '../getYGOProImageUrl'

const baseUrl = 'https://images.ygoprodeck.com/images'

describe('formatDate', () => {
  describe('Valid cases', () => {
    it('returns url for artwork', () => {
      const imageUrl = getYGOProImageUrl('83531441', 'artwork')

      expect(imageUrl).toBe(baseUrl + '/cards_cropped/83531441.jpg')
    })

    it('returns url for render', () => {
      const imageUrl = getYGOProImageUrl('83531441', 'render')

      expect(imageUrl).toBe(baseUrl + '/cards/83531441.jpg')
    })

    it('returns url for artwork with 0-lead passcode', () => {
      const imageUrl = getYGOProImageUrl('04334811', 'artwork')

      expect(imageUrl).toBe(baseUrl + '/cards_cropped/4334811.jpg')
    })

    it('returns url for render with 0-lead passcode', () => {
      const imageUrl = getYGOProImageUrl('04334811', 'render')

      expect(imageUrl).toBe(baseUrl + '/cards/4334811.jpg')
    })

    it('returns url for artwork with multiple 0-lead passcode', () => {
      const imageUrl = getYGOProImageUrl('00002511', 'artwork')

      expect(imageUrl).toBe(baseUrl + '/cards_cropped/2511.jpg')
    })

    it('returns url for render with multiple 0-lead passcode', () => {
      const imageUrl = getYGOProImageUrl('00002511', 'render')

      expect(imageUrl).toBe(baseUrl + '/cards/2511.jpg')
    })
  })

  describe('Invalid cases', () => {
    it('throws error for invalid image type', () => {
      expect(() => getYGOProImageUrl('83531441', 'small' as any)).toThrowError()
    })
  })
})
