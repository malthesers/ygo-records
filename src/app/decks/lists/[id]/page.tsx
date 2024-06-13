import { IDeck } from '@/interfaces/deck'
import getData from '@/services/getData'
import DecklistInfo from './DecklistInfo'
import CardBox from './CardBox'
import filterByCardType from '@/services/filterByCardType'

export default async function DeckListPage({ params }: { params: { id: string } }) {
  const deck = await getData<IDeck>(`decks/${params.id}`)

  return (
    <main className='space-y-4'>
      {deck && <DecklistInfo deck={deck} />}
      {deck.decklist ? (
        <section className='bg-sky-800 p-4 grid md:grid-cols-2 gap-4'>
          <div className='flex flex-col gap-4'>
            <CardBox title='Monsters' cards={filterByCardType(deck.decklist?.mainDeck, 'Monster')} />
            <CardBox title='Spells' cards={filterByCardType(deck.decklist?.mainDeck, 'Spell')} />
            <CardBox title='Traps' cards={filterByCardType(deck.decklist?.mainDeck, 'Trap')} />
          </div>
          <div className='flex flex-col gap-4'>
            <CardBox title='Extra Deck' cards={deck?.decklist.extraDeck} />
            <CardBox title='Side Deck' cards={deck?.decklist.sideDeck} />
          </div>
        </section>
      ) : (
        <section className='bg-sky-800 p-4'>
          <p className='text-2xl text-center'>No decklist available</p>
        </section>
      )}
    </main>
  )
}
