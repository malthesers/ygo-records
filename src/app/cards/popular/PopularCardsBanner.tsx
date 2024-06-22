import TextBanner from '@/components/banners/TextBanner'

export default function PopularCardsBanner() {
  return (
    <TextBanner>
      <h1 className='mb-2 font-semibold'>Most Popular Cards</h1>
      <p className='text-lg text-center font-semibold'>Cards ranked by the percentage of decks they occur in.</p>
    </TextBanner>
  )
}
