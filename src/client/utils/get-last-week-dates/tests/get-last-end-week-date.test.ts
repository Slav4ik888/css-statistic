import { getLastEndWeekDate } from '..';
import mocks from './mocks-last-date';

interface Mock extends Array<MockInItem | MockResult> {
  0: MockInItem;
  1: MockResult;
}

interface MockInItem {
  currentDate : Date,
  endWeekDay  : number
};
interface MockResult {
  result: string
};


describe(`getLastEndWeekDate`, () => {
  mocks.forEach((mock, i) => it(`mocks[${i}]`, () => {
    expect(getLastEndWeekDate(mock[0].currentDate, mock[0].endWeekDay))
    .toEqual(mock[1].result)
  }))
})

// npm run test get-last-end-week-date.test.ts