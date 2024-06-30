import { ICard } from '@/interfaces/card'
import DeckImages from './DeckImages'

interface SideDeckImagesProps {
  sideDeck: ICard[]
}

export default function SideDeckImages({ sideDeck }: SideDeckImagesProps) {
  return <DeckImages title='Side Deck' cards={sideDeck} className='grid grid-cols-5 md:flex' />
}
