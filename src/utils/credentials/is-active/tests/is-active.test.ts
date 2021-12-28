import isActive, { noActive } from ".."
import { mocksUsers } from "../../mocks"

const result = [true, true, true, true, false, false];

describe(`is-active`, () => {

  mocksUsers.forEach((user, i) => it(`isActive ${user?.active}`, () => {
    expect(isActive(user)).toEqual(result[i])
  }));

  mocksUsers.forEach((user, i) => it(`noActive ${user?.active}`, () => {
    expect(noActive(user)).toEqual(!result[i])
  }));
  
});

// npm run test is-active.test.ts