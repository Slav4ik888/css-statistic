import { Mocks } from './types';
import isUndefined from '..';


const mocks: Mocks = [
  [{ obj: undefined, lastChange: `2022-01-16` }, false],
  [``,    false],
  [0,     false],
  [true,  false],
  [false, false],

  [undefined, true],
];



describe(`is`, () => {
  mocks.forEach((m, i) => {
    it(`${i + 1}`, () => expect(isUndefined(m[0])).toEqual(m[1]))
  })
});

// npm run test is-undefined.test.ts
