/**
 * Reformats start and end date strings into a readable string.
 *
 * @param startDateStr Start date of an event in a string convertable to a Date object.
 * @param endDateStr End date of an event in a string convertable to a Date object.
 * @returns A readable string of the events duration using long form of month.
 */
export default function formatDate(startDateStr: string, endDateStr: string) {
  const startDate = new Date(startDateStr)
  const endDate = new Date(endDateStr)

  console.log('Start date:', startDate)
  console.log('End date:', endDate)

  const startMonth = new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(startDate)
  const endMonth = new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(endDate)
  const startDay = new Intl.DateTimeFormat('en-GB', { day: 'numeric' }).format(startDate)
  const endDay = new Intl.DateTimeFormat('en-GB', { day: 'numeric' }).format(endDate)
  const year = new Intl.DateTimeFormat('en-GB', { year: 'numeric' }).format(startDate)

  if (startMonth === endMonth) {
    return `${startMonth} ${startDay}-${endDay}, ${year}`
  } else {
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`
  }
}
