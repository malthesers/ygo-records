import Link from 'next/link'

interface EnginesCellProps {
  engines: string[] | undefined
}

export default function EnginesCell({ engines }: EnginesCellProps) {
  return (
    <td>
      {engines ? (
        engines.map((engine, index) => (
          <Link key={index} href={`/engines/${engine}`}>
            {engine}
          </Link>
        ))
      ) : (
        <p>Pure</p>
      )}
    </td>
  )
}
