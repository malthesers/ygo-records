import TextBanner from '@/components/TextBanner'

export default function DecksBanner() {
  return (
    <TextBanner>
      <h1 className='mb-2 font-semibold'>Most Popular Decks</h1>
      <p className='text-lg text-center font-semibold'>Ranked by percent coverage of total meta.</p>
    </TextBanner>
  )
}
