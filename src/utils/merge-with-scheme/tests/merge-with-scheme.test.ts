import { mergeWithScheme } from '..';
import { Mocks } from './types';
import withStaticLastChange from '../../tests/with-static-last-change';
import { RoleType } from '../../../types';


const mocks: Mocks = [
  [{
    data: {
      user: {
        family: false,
        role: RoleType.SUPER,
        userId: `userId_1`,
        executive: {
          first: `123`,
          second: `234`,
          third: {
            last: `last data`,
            open: false
          }
        },
        companyId: `companyId_1`
      },
      profile: {
        status: `PARTICIPAINT`,
        userId: `userId_2`,
        companyId: `companyId_2`
      },
      level: `some text`
    },
    scheme: {
      user: {
        family: ``,
        role: ``,
        executive: {
          first: ``,
          third: {
            last: ``
          }
        }
      },
      profile: {
        status: ``
      }
    }
  }, {
    user: {
      family: false,
      role: RoleType.SUPER,
      executive: {
        first: `123`,
        third: {
          last: `last data`
        }
      },
    },
    profile: {
      status: `PARTICIPAINT`
    },
    lastChange: `2022-01-16`
    }],
  
  
  [{ data: undefined,         scheme: { user: `` } }, {}],
  [{ data: { user: `Slava` }, scheme: undefined },    {}],
];




describe(`mergeWithScheme`, () => {
  mocks.forEach((m, i) => {
    it(`${i + 1}`, () => {

      expect(withStaticLastChange(mergeWithScheme(m[0].data, m[0].scheme), m[1].lastChange))
        .toEqual(m[1])
    })
  })
});

// npm run test merge-with-scheme.test.ts
