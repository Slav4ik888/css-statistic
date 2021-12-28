import checkByUserType from ".."
import { mocksUsers } from '../../mocks/mocks-user';

const result  = [true, true, false, false, true, false];

describe(`checkByUserType`, () => {

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}]`, () => {
    expect(checkByUserType(user)).toEqual(result[i])
  }));

});

// npm run test check-by-user-type.test.ts