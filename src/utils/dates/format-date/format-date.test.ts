import formatDate from './index';
import mocks from './mocks';


describe(`formatDate`, () => {
  mocks.forEach((m) => it(`format = ${m[0].format}, sub = ${m[0].sub}`, () => expect(
    formatDate(m[0].ms, m[0].format, m[0].sub)
  )
    .toEqual(m[1])))
});

// npm run test format-date.test.ts