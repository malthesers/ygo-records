export default function formatMetadata(name: string, page: string) {
  return {
    title: `${name} | YGO Records`,
    description: `YGO Records | Yu-Gi-Oh! ${page} page for ${name} `,
    keywords: ['Yu-Gi-Oh!', 'Yugioh', name],
    openGraph: {
      title: `${name} | YGO Records`,
      description: `YGO Records | Yu-Gi-Oh! ${page} page for ${name} `,
    },
  }
}
