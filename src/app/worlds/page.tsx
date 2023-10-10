import Image from "next/image";
import logo from '~/images/logos/worlds.png'

export default function Worlds() {
  return (
    <main>
      <h1>Yu-Gi-Oh! World Championship</h1>
      <Image
        src={logo}
        alt='Yu-Gi-Oh! World Championship logo'
        placeholder="blur"
        priority
        className="mx-auto"
      />
    </main>
  )
}
