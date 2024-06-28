import { ICard } from '@/interfaces/card'
import DeckImages from './DeckImages'

interface ExtraDeckImagesProps {
  extraDeck: ICard[]
}

export default function ExtraDeckImages({ extraDeck }: ExtraDeckImagesProps) {
  return <DeckImages title='Extra Deck' cards={extraDeck} className='grid grid-cols-5 md:flex' />
}
