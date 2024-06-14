import formatDate from '@/services/formatDate'

interface DateCellProps {
  startDate: string
  endDate: string
}

export default function DateCell({ startDate, endDate }: DateCellProps) {
  return <td className='hidden md:table-cell'>{formatDate(startDate, endDate)}</td>
}
