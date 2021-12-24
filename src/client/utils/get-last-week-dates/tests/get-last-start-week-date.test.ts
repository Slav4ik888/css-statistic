import { getLastStartWeekDate } from '..';
import mocks from './mocks-last-start-date';


describe(`getLastStartWeekDate`, () => {
  mocks.forEach((mock, i) => it(`mocks[${i}]`, () => {
    expect(getLastStartWeekDate(mock.value))
    .toEqual(mock.result)
  }))
})

// npm run test get-last-start-week-date.test.ts