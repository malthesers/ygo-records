import { Attribute } from '@/interfaces/card/monster'
import { IconList } from '@/interfaces/input'
import LIGHTIcon from '~/images/attributes/LIGHT.svg'
import DARKIcon from '~/images/attributes/DARK.svg'
import WATERIcon from '~/images/attributes/WATER.svg'
import FIREIcon from '~/images/attributes/FIRE.svg'
import EARTHIcon from '~/images/attributes/EARTH.svg'
import WINDIcon from '~/images/attributes/WIND.svg'

export const attributes: IconList<Attribute>[] = [
  { type: 'LIGHT', icon: LIGHTIcon },
  { type: 'DARK', icon: DARKIcon },
  { type: 'WATER', icon: WATERIcon },
  { type: 'FIRE', icon: FIREIcon },
  { type: 'EARTH', icon: EARTHIcon },
  { type: 'WIND', icon: WINDIcon },
]

export default attributes
