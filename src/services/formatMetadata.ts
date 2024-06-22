import { Metadata } from 'next'

export type { Metadata }

export default function formatMetadata(title: string, page: string): Metadata {
  return {
    title: `${title} | YGO Records`,
    description: `YGO Records | Yu-Gi-Oh! ${page} page for ${title} `,
    keywords: ['Yu-Gi-Oh!', 'Yugioh', title],
    openGraph: {
      title: `${title} | YGO Records`,
      description: `YGO Records | Yu-Gi-Oh! ${page} page for ${title} `,
    },
  }
}
