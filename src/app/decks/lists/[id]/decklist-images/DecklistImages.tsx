import { IDecklist } from '@/interfaces/deck'
import flattenCards from '@/services/flattenCards'
import ExtraDeckImages from './ExtraDeckImages'
import SideDeckImages from './SideDeckImages'
import MainDeckImages from './MainDeckImages'

interface DecklistImagesProps {
  decklist: IDecklist
}

export default function DecklistImages({ decklist }: DecklistImagesProps) {
  return (
    <section className='bg-sky-800 p-4 space-y-4'>
      <MainDeckImages mainDeck={flattenCards(decklist.mainDeck)} />
      <ExtraDeckImages extraDeck={flattenCards(decklist.extraDeck)} />
      <SideDeckImages sideDeck={flattenCards(decklist.sideDeck)} />
    </section>
  )
}
