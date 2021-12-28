import checkByRoleCreds from "..";
import { mocksRolesCreds } from "../../mocks";
import creds from '../../actual-creds';


const resultAll    = [false, false, true, false];
const resultNotAll = [false, true,  true, false];

describe(`checkByRoleCreds`, () => {

  mocksRolesCreds.forEach((roleCreds, i) => it(`[CredTypeAll] - true`, () => {
    expect(checkByRoleCreds(creds.CREDS_ROLES_D, roleCreds, true))
      .toEqual(resultAll[i])
  }));

  mocksRolesCreds.forEach((roleCreds, i) => it(`[CredTypeAll] - false`, () => {
    expect(checkByRoleCreds(creds.CREDS_ROLES_D, roleCreds, false))
      .toEqual(resultNotAll[i])
  }));
  
});

// npm run test check-by-role-creds.test.ts