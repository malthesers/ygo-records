import { StaticImageData } from 'next/image'

export interface IconList<T> {
  type: T
  icon?: StaticImageData
}
