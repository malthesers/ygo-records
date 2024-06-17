import formatDate from '../formatDate'

const validDateSameDay: [string, string, string][] = [
  ['2023-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z', 'January 1, 2023'],
  ['2023-12-31T00:00:00.000Z', '2023-12-31T00:00:00.000Z', 'December 31, 2023'],
]

const validDateSameMonth: [string, string, string][] = [
  ['2023-01-01T00:00:00.000Z', '2023-01-02T00:00:00.000Z', 'January 1-2, 2023'],
  ['2023-01-30T00:00:00.000Z', '2023-01-31T00:00:00.000Z', 'January 30-31, 2023'],
  ['2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z', 'January 1-31, 2023'],
]

const validDateDiffMonth: [string, string, string][] = [
  ['2023-01-31T00:00:00.000Z', '2023-02-01T00:00:00.000Z', 'January 31 - February 1, 2023'],
  ['2023-02-28T00:00:00.000Z', '2023-03-01T00:00:00.000Z', 'February 28 - March 1, 2023'],
  ['2023-03-31T00:00:00.000Z', '2023-04-01T00:00:00.000Z', 'March 31 - April 1, 2023'],
  ['2023-04-30T00:00:00.000Z', '2023-05-01T00:00:00.000Z', 'April 30 - May 1, 2023'],
  ['2023-05-31T00:00:00.000Z', '2023-06-01T00:00:00.000Z', 'May 31 - June 1, 2023'],
  ['2023-06-30T00:00:00.000Z', '2023-07-01T00:00:00.000Z', 'June 30 - July 1, 2023'],
  ['2023-07-31T00:00:00.000Z', '2023-08-01T00:00:00.000Z', 'July 31 - August 1, 2023'],
  ['2023-08-31T00:00:00.000Z', '2023-09-01T00:00:00.000Z', 'August 31 - September 1, 2023'],
  ['2023-09-30T00:00:00.000Z', '2023-10-01T00:00:00.000Z', 'September 30 - October 1, 2023'],
  ['2023-10-31T00:00:00.000Z', '2023-11-01T00:00:00.000Z', 'October 31 - November 1, 2023'],
  ['2023-11-30T00:00:00.000Z', '2023-12-01T00:00:00.000Z', 'November 30 - December 1, 2023'],
  ['2023-12-31T00:00:00.000Z', '2024-01-01T00:00:00.000Z', 'December 31, 2023 - January 1, 2024'],
]

const validDateDiffYear: [string, string, string][] = [
  ['1969-12-31T00:00:00.000Z', '1970-01-01T00:00:00.000Z', 'December 31, 1969 - January 1, 1970'],
  ['1970-12-31T00:00:00.000Z', '1971-01-01T00:00:00.000Z', 'December 31, 1970 - January 1, 1971'],
  ['1999-12-31T00:00:00.000Z', '2000-01-01T00:00:00.000Z', 'December 31, 1999 - January 1, 2000'],
]

const invalidDateString: [string, string][] = [
  ['', ''], // Empty strings
  ['1970-01-00T00:00:00.000Z', '1970-01-00T00:00:00.000Z'], // Inexistent day - lower
  ['1970-12-32T00:00:00.000Z', '1970-12-32T00:00:00.000Z'], // Inexistent day - upper
  ['1970-00-01T00:00:00.000Z', '1970-00-01T00:00:00.000Z'], // Inexistent month - lower
  ['1970-13-01T00:00:00.000Z', '1970-13-01T00:00:00.000Z'], // Inexistent month - lower
]

const invalidDateDataType: [any, any][] = [
  [null, null], // null
  [true, false], // booleans
  [undefined, undefined], // undefined
  [19700101, 19700102], // numbers
]

describe('formatDate', () => {
  describe('Valid cases', () => {
    test.each(validDateSameDay)(
      'returns formatted string for same day: %s, %s',
      (startDateStr, endDateStr, expected) => {
        const formattedDate = formatDate(startDateStr, endDateStr)

        expect(formattedDate).toBe(expected)
      }
    )

    test.each(validDateSameMonth)(
      'returns formatted string for same month: %s, %s',
      (startDateStr, endDateStr, expected) => {
        const formattedDate = formatDate(startDateStr, endDateStr)

        expect(formattedDate).toBe(expected)
      }
    )

    test.each(validDateDiffMonth)(
      'returns formatted string for different month: %s, %s',
      (startDateStr, endDateStr, expected) => {
        const formattedDate = formatDate(startDateStr, endDateStr)

        expect(formattedDate).toBe(expected)
      }
    )

    test.each(validDateDiffYear)(
      'returns formatted string for different year: %s, %s',
      (startDateStr, endDateStr, expected) => {
        const formattedDate = formatDate(startDateStr, endDateStr)

        expect(formattedDate).toBe(expected)
      }
    )
  })

  describe('Invalid cases', () => {
    test.each(invalidDateString)('throws error for invalid strings: %o, %o', (startDateStr, endDateStr) => {
      expect(() => formatDate(startDateStr, endDateStr)).toThrowError('Invalid time value')
    })

    test.each(invalidDateDataType)('throws error for invalid data types: %o, %o', (startDateStr, endDateStr) => {
      expect(() => formatDate(startDateStr, endDateStr)).toThrowError('Must be a string.')
    })
  })
})
