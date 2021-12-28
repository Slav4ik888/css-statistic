import getUserType from "..";
import { RoleType } from "../../../../types";
import { mocksUsers } from "../../mocks";

const result = [RoleType.SUPER, RoleType.ADMIN, RoleType.USER, null, RoleType.ADMIN, undefined];


describe(`getUserType`, () => {

  mocksUsers.forEach((user, i) => it(`${user?.role?.type}`, () => {
    expect(getUserType(user)).toEqual(result[i])
  }));
});

// npm run test get-user-type.test.ts