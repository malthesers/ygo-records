import { CardType } from '@/interfaces/card'
import OptionsInputTemplate from './templates/OptionsInputTemplate'

export default function CardTypeInput() {
  const cardTypes: CardType[] = ['Monster', 'Spell', 'Trap']

  return <OptionsInputTemplate field='cardType' options={cardTypes} columns={3} />
}
