import getLastWeekDatesForCss from '..';
import mock from './mocks-css';


describe(`getLastWeekDatesForCss`, () => {
  it(`by default`, () => {
    expect(getLastWeekDatesForCss()).toEqual(mock)
  })
});

// npm run test get-last-week-dates-for-css.test.ts