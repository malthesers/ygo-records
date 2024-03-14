import { IPlayer } from '@/interfaces/player'
import Image from 'next/image'
import splash from '~/images/splash/hieroglyphs-blue.png'

interface PlayerInfoProps {
  player: IPlayer
}

export default function PlayerInfo({ player }: PlayerInfoProps) {
  return (
    <section className='relative min-h-[15rem] p-0 grid grid-cols-1 grid-rows-1 *:grid-center'>
      <Image className='-z-10 object-cover' src={splash} alt='hieroglyphs splash image' priority fill />
      <div className='size-full bg-black/50 p-4'>
        <div className='z-10 h-full p-4 flex flex-col gap-2 justify-center border-white border-4'>
          <h1 className='mb-2 font-semibold'>{player.name}</h1>
        </div>
      </div>
    </section>
  )
}
