import { CardType } from '@/interfaces/card'
import OptionsInputTemplate from './templates/OptionsInputTemplate'
import { IconList } from '@/interfaces/input'

export default function CardTypeInput() {
  const cardTypes: IconList<CardType>[] = [{ type: 'Monster' }, { type: 'Spell' }, { type: 'Trap' }]

  return <OptionsInputTemplate field='cardType' options={cardTypes} columns={3} />
}
