import { TrapType } from '@/interfaces/card/trap'
import { IconList, IconMap } from '@/interfaces/icons'
import NormalIcon from '~/images/spell-trap-icons/normal.svg'
import ContinuousIcon from '~/images/spell-trap-icons/continuous.webp'
import CounterIcon from '~/images/spell-trap-icons/counter.webp'

export const trapTypeIconsMap: IconMap<TrapType> = {
  Normal: NormalIcon,
  Continuous: ContinuousIcon,
  Counter: CounterIcon,
}

export const trapTypeIconsList: IconList<TrapType>[] = [
  {
    type: 'Normal',
  },
  {
    type: 'Continuous',
    icon: ContinuousIcon,
  },
  {
    type: 'Counter',
    icon: CounterIcon,
  },
]
