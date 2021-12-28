import { noCred } from "..";
import creds from '../../actual-creds';
import { mocksUsers } from '../../mocks/mocks-user';
import { mocksRolesCreds } from '../../mocks/mocks-roles-creds';
//                     Type =  Super  Admin  User   Null   
//                                                        active null
//                                                        = 
//                                                        false
const exceptFalseRes        = [false, false, true,  true, true,  true];
const exceptTrueRes         = [false, true,  true,  true, true,  true];
const exceptTrueCredAllRes  = [false, true,  true,  true, true,  true];
const exceptFalseRes2       = [false, false, false, true, true,  true];
const exceptFalseCredAllRes = [false, false, false, true, true,  true];


describe(`noCred`, () => {

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}] [checkByUserType] [noCredAll]`, () => {
    expect(
      noCred(creds.CREDS_ROLES_D, user, mocksRolesCreds[0], false)
    ).toEqual(exceptFalseRes[i])
  }));

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}] [exception] [noCredAll]`, () => {
    expect(
      noCred(creds.CREDS_ROLES_D, user, mocksRolesCreds[0], false, true)
    ).toEqual(exceptTrueRes[i])
  }));

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}] [exception] [CredAll]`, () => {
    expect(
      noCred(creds.CREDS_ROLES_D, user, mocksRolesCreds[1], true, true)
    ).toEqual(exceptTrueCredAllRes[i])
  }));

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}] [checkByUserType] [noCredAll]`, () => {
    expect(
      noCred(creds.CREDS_ROLES_D, user, mocksRolesCreds[1], false)
    ).toEqual(exceptFalseRes2[i])
  }));

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}] [checkByUserType] [CredAll]`, () => {
    expect(
      noCred(creds.CREDS_ROLES_D, user, mocksRolesCreds[2], false)
    ).toEqual(exceptFalseCredAllRes[i])
  }));
});

// npm run test no-cred.test.ts