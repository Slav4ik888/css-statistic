import { Mocks } from './types';
import withStaticField from '..';


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
    field: `lastChange`,
    fieldValue: `2022-01-16`
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
  
  
  [{ obj: undefined,            field: `lastChange`, fieldValue: `2022-01-16` }, {}],
  [{ obj: { user: `Foo-Beee` }, field: undefined,    fieldValue: `` },           {}],
  [{ obj: { user: `Foo-Beee` }, field: `buter`,      fieldValue: `brod` },    { user: `Foo-Beee`, buter: `brod` }],
];




describe(`mergeWithScheme`, () => {
  mocks.forEach((m, i) => {
    it(`${i + 1}`, () => {

      expect(withStaticField(m[0].obj, m[0].field, m[0].fieldValue))
        .toEqual(m[1])
    })
  })
});

// npm run test with-static-field.test.ts
