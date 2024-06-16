import formatDate from '@/services/formatDate'

interface DateCellProps {
  startDate: string
  endDate: string
}

export default function DateCell({ startDate, endDate }: DateCellProps) {
  const date = formatDate(startDate, endDate)

  return <td className='hidden md:table-cell'>{date}</td>
}
