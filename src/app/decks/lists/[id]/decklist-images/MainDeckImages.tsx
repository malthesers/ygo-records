import { ICard } from '@/interfaces/card'
import DeckImages from './DeckImages'

interface MainDeckImagesProps {
  mainDeck: ICard[]
}

export default function MainDeckImages({ mainDeck }: MainDeckImagesProps) {
  return <DeckImages title='Main Deck' cards={mainDeck} className='grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-10' />
}
