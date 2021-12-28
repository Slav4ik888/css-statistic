import isCredTypeAll from "..";
import mocks from "./mocks";

describe(`isCredTypeAll`, () => {
  mocks
    .forEach(m => it(`${m[0]}`, () => expect(isCredTypeAll(m[0]))
    .toEqual(m[1])
  ));
});

// npm run test is-cred-type-all.test.ts