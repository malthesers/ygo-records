/**
 * Reformats start and end date strings into a readable string.
 *
 * @param startDateStr Start date of an event in a string convertable to a Date object.
 * @param endDateStr End date of an event in a string convertable to a Date object.
 * @returns A readable string of the events duration using long form of month.
 */
export default function formatDate(startDateStr: string, endDateStr: string) {
  if (typeof startDateStr !== 'string') {
    throw new Error(`Invalid startDateStr value: "${startDateStr}". Must be a string.`)
  }

  if (typeof endDateStr !== 'string') {
    throw new Error(`Invalid startDateStr value: "${endDateStr}". Must be a string.`)
  }

  const startDate = new Date(startDateStr)
  const endDate = new Date(endDateStr)

  const startYear = new Intl.DateTimeFormat('en-GB', { year: 'numeric' }).format(startDate)
  const endYear = new Intl.DateTimeFormat('en-GB', { year: 'numeric' }).format(endDate)
  const startMonth = new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(startDate)
  const endMonth = new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(endDate)
  const startDay = new Intl.DateTimeFormat('en-GB', { day: 'numeric' }).format(startDate)
  const endDay = new Intl.DateTimeFormat('en-GB', { day: 'numeric' }).format(endDate)

  if (startYear !== endYear) {
    return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`
  }

  if (startMonth !== endMonth) {
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`
  }

  if (startDay === endDay) {
    return `${startMonth} ${startDay}, ${startYear}`
  }

  return `${startMonth} ${startDay}-${endDay}, ${startYear}`
}
