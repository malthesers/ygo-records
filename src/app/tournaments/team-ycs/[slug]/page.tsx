export default function TEAMYCSPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Yu-Gi-Oh! Championship Series {params.slug}</h1>
    </main>
  )
}
