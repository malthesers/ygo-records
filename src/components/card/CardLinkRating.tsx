import { Rating } from '@/interfaces/card/monster'

interface CardLinkRatingProps {
  rating: Rating
}

export default function CardLinkRating({ rating }: CardLinkRatingProps) {
  return (
    <div className='w-[83%] h-[5%] m-auto mb-[7.5%] flex justify-end'>
      {/* <span className='font-link-rating '>{rating}</span> */}
    </div>
  )
}
