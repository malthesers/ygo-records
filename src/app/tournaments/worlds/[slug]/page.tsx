export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Yu-Gi-Oh! World Championship {params.slug}</h1>
    </main>
  )
}