import { Mocks } from './types';
import withStaticLastChange from '..';


const mocks: Mocks = [
  [{
    obj: {
      user: {
        family: false,
        userId: `userId_1`,
        executive: {
          first: `123`,
          second: `234`,
          third: {
            last: `last data`,
            open: false
          }
        }
      },
      lastChange: `2022-01-17T02:34:37.224Z`
    },
    lastChange: `2022-01-16`
  }, {
      user: {
        family: false,
        userId: `userId_1`,
        executive: {
          first: `123`,
          second: `234`,
          third: {
            last: `last data`,
            open: false
          }
        }
      },
      lastChange: `2022-01-16`
    }],
  
  
  [{ obj: undefined,         lastChange: `2022-01-16` }, {}],
  [{ obj: { user: `Foo-Beee` }, lastChange: `` },        {}],
  [{ obj: { user: `Foo-Beee` }, lastChange: undefined }, {}],
];




describe(`mergeWithScheme`, () => {
  mocks.forEach((m, i) => {
    it(`${i + 1}`, () => {

      expect(withStaticLastChange(m[0].obj, m[0].lastChange))
        .toEqual(m[1])
    })
  })
});

// npm run test with-static-last-change.test.ts
