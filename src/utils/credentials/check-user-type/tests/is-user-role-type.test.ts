import { isAdmin, isSuper, isUser } from "..";
import { mocksUsers } from "../../mocks";

const isSuperRes = [true,  false, false, false, false, false];
const isAdminRes = [false, true,  false, false, true,  false];
const isUserRes  = [false, false, true,  false, false, false];


describe(`is-user-role-type`, () => {
  mocksUsers.forEach((user, i) => it(`isSuper ${user?.role?.type}`, () => {
    expect(isSuper(user)).toEqual(isSuperRes[i]);
  }));
  mocksUsers.forEach((user, i) => it(`isAdmin ${user?.role?.type}`, () => {
    expect(isAdmin(user)).toEqual(isAdminRes[i]);
  }));
  mocksUsers.forEach((user, i) => it(`isUser ${user?.role?.type}`, () => {
    expect(isUser(user)).toEqual(isUserRes[i]);
  }));
});

// npm run test is-user-role-type.test.ts