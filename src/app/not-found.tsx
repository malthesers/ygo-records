'use client'

import splash from '~/images/splash/hieroglyphs-blue.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <main>
      <section className='relative min-h-[35rem] p-0 grid grid-cols-1 grid-rows-1 *:grid-center'>
        <Image className='-z-10 object-cover' src={splash} alt='hieroglyphs splash image' priority fill />
        <div className='size-full bg-black/50 p-4'>
          <div className='z-10 size-full p-4 flex flex-col gap-2 items-center justify-center border-white border-4'>
            <h1 className='mb-0 font-semibold text-5xl'>404</h1>
            <p className='text-xl'>Page was not found</p>
            <button onClick={() => router.back()}>Go back</button>
          </div>
        </div>
      </section>
    </main>
  )
}
