import { ICardBase } from '.'

interface ITrapCard extends ICardBase {
  cardType: 'Trap'
  type: TrapType
  frame: 'trap'
}

type TrapType = 'Normal' | 'Continuous' | 'Counter'
