interface AttendanceCellProps {
  attendance: number
  isTeamYCS: boolean
}

export default function AttendanceCell({ attendance, isTeamYCS }: AttendanceCellProps) {
  return (
    <td className='hidden md:table-cell'>
      {attendance} {isTeamYCS && 'teams'}
    </td>
  )
}
