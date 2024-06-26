import { ImageType } from '@/interfaces/card'

/**
 * Generates and returns a URL for the image from YGOPro's API.
 *
 * @param passcode Passcode of the card in a string.
 * @param type Type of image being the artwork or the render.
 * @returns Url for the image resource from YGOPro's API.
 */
export default function getYGOProImageUrl(passcode: string, type: ImageType) {
  const imageTypes: ImageType[] = ['artwork', 'render']

  if (!imageTypes.includes(type)) {
    throw new Error('Image type must be either "artwork" or "render".')
  }

  const baseUrl = 'https://images.ygoprodeck.com/images'
  const imageType = {
    artwork: 'cards_cropped',
    render: 'cards',
  }
  const shortPasscode = passcode.replace(/^0+/, '')

  return `${baseUrl}/${imageType[type]}/${shortPasscode}.jpg`
}
