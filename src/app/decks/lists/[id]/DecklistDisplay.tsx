import { IDecklist } from '@/interfaces/deck'
import DecklistText from './decklist-text/DecklistText'
import DecklistImages from './decklist-images/DecklistImages'

interface DecklistDisplayProps {
  decklist: IDecklist
}

export default function DecklistDisplay({ decklist }: DecklistDisplayProps) {
  return (
    <>
      <DecklistImages decklist={decklist} />
      {/* <DecklistText decklist={decklist} /> */}
    </>
  )
}
