import { MetadataRoute } from 'next'

interface Manifest extends MetadataRoute.Manifest {
  screenshots?: {
    src: string
    type?: string
    sizes?: string
    form_factor?: 'narrow' | 'wide'
  }[]
}

export default function manifest(): Manifest {
  return {
    name: 'YGO Records',
    short_name: 'YGO Records',
    description: 'YGO Records | Discover the newest and most effective decks',
    start_url: '/',
    display: 'standalone',
    background_color: '#082F49',
    theme_color: '#0C4A6E',
    lang: 'en',
    categories: ['entertainment', 'games'],
    icons: [
      {
        src: '/icon1.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/icon2.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icon3.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon4.png',
        sizes: '512x512',
        type: 'image/png',
      },
      // {
      //   src: '/maskable-icon.png',
      //   sizes: '192x192',
      //   type: 'image/png',
      //   purpose: 'maskable',
      // },
    ],
    screenshots: [],
  }
}
