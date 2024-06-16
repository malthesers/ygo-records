interface NoDataProps {
  children: React.ReactNode
}

export default function NoData({ children }: NoDataProps) {
  return (
    <section className='bg-sky-800 py-8 px-4'>
      <p className='text-2xl text-center'>{children}</p>
    </section>
  )
}
