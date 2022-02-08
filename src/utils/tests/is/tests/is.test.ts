import { Mocks } from './types';
import is from '..';


const mocks: Mocks = [
  [{ obj: undefined, lastChange: `2022-01-16` }, true],
  [``, true],
  [0,  true],

  [undefined, false],
];



describe(`is`, () => {
  mocks.forEach((m, i) => {
    it(`${i + 1}`, () => expect(is(m[0])).toEqual(m[1]))
  })
});

// npm run test is.test.ts
