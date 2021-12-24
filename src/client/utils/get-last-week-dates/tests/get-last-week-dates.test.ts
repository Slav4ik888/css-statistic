import { getLastWeekDates } from '..';
import mocks from './mocks-last-week-dates';



describe(`getLastWeekDates`, () => {
  mocks.forEach((mock, i) => it(`mocks[${i}]`, () => {
    expect(getLastWeekDates(mock[0].endWeekDay))
    .toEqual(mock[1])
  }))
})

// npm run test get-last-week-dates.test.ts