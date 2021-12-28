import isCredType from "..";
import mocks from "./mocks";

describe(`isCredType`, () => {
  mocks
    .forEach(m => it(`${m[0]}`, () => expect(isCredType(m[0]))
    .toEqual(m[1])
  ));
});

// npm run test is-cred-type.test.ts