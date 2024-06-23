import type { Config } from 'tailwindcss'
import type { PluginAPI } from 'tailwindcss/types/config'

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-inter)'],
        'card-title': ['var(--font-matrix-book)'],
        'link-rating': ['var(--font-link-rating)'],
      },
      backgroundImage: {
        hieroglyphs: 'url("/images/splash/hieroglyphs-blue.png")',
      },
      animation: {
        'spin-y': 'spin-y 1s linear infinite',
      },
      keyframes: {
        'spin-y': {
          '0%': {
            transform: 'rotateY(0deg)',
          },
          '100%': {
            transform: 'rotateY(360deg)',
          },
        },
      },
    },
  },
  plugins: [
    ({ addUtilities }: PluginAPI) => {
      addUtilities([
        {
          '.grid-center': {
            'grid-area': '1/1/1/1',
          },
        },
      ])
    },
  ],
}
export default config
