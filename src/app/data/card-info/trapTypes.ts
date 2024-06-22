import { TrapType } from '@/interfaces/card/trap'
import { IconList } from '@/interfaces/icons'
import ContinuousIcon from '~/images/spell-trap-icons/continuous.webp'
import CounterIcon from '~/images/spell-trap-icons/counter.webp'

export const trapTypes: IconList<TrapType>[] = [
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

export default trapTypes
