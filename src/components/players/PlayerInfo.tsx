import { IPlayer } from '@/interfaces/player'
import Image from 'next/image'
import splash from '~/images/splash/remote-ycs.png'

interface PlayerInfoProps {
  player: IPlayer
}

export default function PlayerInfo({ player }: PlayerInfoProps) {
  return (
    <section className='relative min-h-40 p-0 grid grid-cols-1 grid-rows-1 *:grid-center'>
      <Image src={splash} alt='player page splash image' className='-z-10 size-full object-cover' priority fill />
      <div className='size-full p-4'>
        <div className='z-10 p-4 flex flex-col gap-2 items-center border-white border-4'>
          <h1 className='mb-2 font-semibold'>{player?.name}</h1>
        </div>
      </div>
    </section>
  )
}
