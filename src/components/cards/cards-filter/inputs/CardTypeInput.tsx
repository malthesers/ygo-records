import { CardType } from '@/interfaces/card'
import OptionsInputTemplate from './templates/OptionsInputTemplate'
import { TypeList } from '@/interfaces/input'

export default function CardTypeInput() {
  const cardTypes: TypeList<CardType>[] = [{ type: 'Monster' }, { type: 'Spell' }, { type: 'Trap' }]

  return <OptionsInputTemplate field='cardType' options={cardTypes} columns={3} />
}
