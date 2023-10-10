import Image from "next/image";
import logo from '~/images/logos/ycs.png'

export default function YCS() {
  return (
    <main>
      <h1>Yu-Gi-Oh! Championship Series</h1>
      <Image
        src={logo}
        alt='Yu-Gi-Oh! Championship Series logo'
        placeholder="blur"
        priority
        className="mx-auto"
      />
    </main>
  )
}
