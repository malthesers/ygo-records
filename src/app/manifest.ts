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
    description: 'YGO Records | Yu-Gi-Oh! deck, event and player database',
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
      {
        src: '/maskable-icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/screenshots/mobile1.jpg',
        type: 'image/png',
        sizes: '828x1792',
        form_factor: 'narrow',
      },
      {
        src: '/screenshots/mobile2.jpg',
        type: 'image/png',
        sizes: '828x1792',
        form_factor: 'narrow',
      },
      {
        src: '/screenshots/mobile3.jpg',
        type: 'image/png',
        sizes: '828x1792',
        form_factor: 'narrow',
      },
      {
        src: '/screenshots/desktop1.jpg',
        type: 'image/png',
        sizes: '2004x1080',
        form_factor: 'wide',
      },
      {
        src: '/screenshots/desktop2.jpg',
        type: 'image/png',
        sizes: '2004x1080',
        form_factor: 'wide',
      },
      {
        src: '/screenshots/desktop3.jpg',
        type: 'image/png',
        sizes: '2004x1080',
        form_factor: 'wide',
      },
    ],
  }
}
