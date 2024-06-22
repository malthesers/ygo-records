import { StaticImageData } from 'next/image'

export type IconMap<T> = {
  [key in T]: StaticImageData
}

export interface IconList<T> {
  type: T
  icon?: StaticImageData
}
