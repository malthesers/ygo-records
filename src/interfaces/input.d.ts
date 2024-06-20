import { StaticImageData } from 'next/image'

export interface TypeList<T> {
  type: T
  icon?: StaticImageData
}
