import { ICardBase } from '.'

interface ITrapCard extends ICardBase {
  cardType: 'Trap'
  type: TrapType
}

type TrapType = 'Normal' | 'Continuous' | 'Counter'
