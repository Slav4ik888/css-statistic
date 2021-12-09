import { isOneOfSeveral } from './index.js';
import mocks from './mocks.js';

describe(`isOneOfSeveral`, () => {
  mocks.forEach(m => {
    it(`Case`, () => {
      expect(isOneOfSeveral(m.case[0], m.case[1])).toEqual(m.result)
    })
  })
});

// npm run test is-one-of-several.test.js