import type { Metadata } from "next"
import Image from "next/image";
import logo from '~/images/logos/worlds.png'

export const metadata: Metadata = {
  title: 'YGOTops | Yu-Gi-Oh! World Championship',
  description: 'YGOTops'
}

export default function Worlds() {
  return (
    <main>
      <h1>Yu-Gi-Oh! World Championship</h1>
      <Image
        src={logo}
        alt='Yu-Gi-Oh! World Championship logo'
        priority
        className="mx-auto"
      />
    </main>
  )
}
