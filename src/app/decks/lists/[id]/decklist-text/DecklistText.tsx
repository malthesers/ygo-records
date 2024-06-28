import { IDecklist } from '@/interfaces/deck'
import CardBox from './CardBox'
import filterByCardType from '@/services/filterByCardType'

interface DecklistTextProps {
  decklist: IDecklist
}

export default function DecklistText({ decklist }: DecklistTextProps) {
  return (
    <section className='bg-sky-800 p-4 grid md:grid-cols-2 gap-4'>
      <div className='flex flex-col gap-4'>
        <CardBox title='Monsters' cards={filterByCardType(decklist.mainDeck, 'Monster')} />
        <CardBox title='Spells' cards={filterByCardType(decklist.mainDeck, 'Spell')} />
        <CardBox title='Traps' cards={filterByCardType(decklist.mainDeck, 'Trap')} />
      </div>
      <div className='flex flex-col gap-4'>
        <CardBox title='Extra Deck' cards={decklist.extraDeck} />
        <CardBox title='Side Deck' cards={decklist.sideDeck} />
      </div>
    </section>
  )
}
