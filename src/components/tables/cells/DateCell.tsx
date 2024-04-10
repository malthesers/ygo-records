interface DateCellProps {
  date: string
}

export default function DateCell({ date }: DateCellProps) {
  return <td className='hidden md:table-cell'>{date}</td>
}
