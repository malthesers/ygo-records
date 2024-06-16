import { IEvent } from '@/interfaces/event'
import formatDate from '@/services/formatDate'

interface DateCellProps {
  event: IEvent
  // startDate: string
  // endDate: string
}

export default function DateCell({ event }: DateCellProps) {
  console.log(event)

  const date = formatDate(event.startDate, event.endDate)

  return <td className='hidden md:table-cell'>{date}</td>
}
