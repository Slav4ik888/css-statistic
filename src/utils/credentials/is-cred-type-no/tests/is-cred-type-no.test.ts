import isCredTypeNo from "..";
import mocks from "./mocks";

describe(`isCredTypeNo`, () => {
  mocks
    .forEach(m => it(`${m[0]}`, () => expect(isCredTypeNo(m[0]))
    .toEqual(m[1])
  ));
});

// npm run test is-cred-type-no.test.ts