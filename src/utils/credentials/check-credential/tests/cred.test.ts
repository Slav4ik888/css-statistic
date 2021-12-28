import { cred } from "..";
import creds from '../../actual-creds';
import { mocksUsers } from '../../mocks/mocks-user';
import { mocksRolesCreds } from '../../mocks/mocks-roles-creds';
//                     Type =  Super  Admin  User    Null   
//                                                          active  null
//                                                          = 
//                                                          false
const exceptFalseRes        = [true,  true,  false,  false, false,  false];
const exceptTrueRes         = [true,  false, false,  false, false,  false];
const exceptTrueCredAllRes  = [true,  false, false,  false, false,  false];
const exceptFalseRes2       = [true,  true,  true,   false, false,  false];
const exceptFalseCredAllRes = [true,  true,  true,   false, false,  false];


describe(`cred`, () => {

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}] [checkByUserType] [noCredAll]`, () => {
    expect(
      cred(creds.CREDS_ROLES_D, user, mocksRolesCreds[0], false)
    ).toEqual(exceptFalseRes[i])
  }));

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}] [exception] [noCredAll]`, () => {
    expect(
      cred(creds.CREDS_ROLES_D, user, mocksRolesCreds[0], false, true)
    ).toEqual(exceptTrueRes[i])
  }));

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}] [exception] [CredAll]`, () => {
    expect(
      cred(creds.CREDS_ROLES_D, user, mocksRolesCreds[1], true, true)
    ).toEqual(exceptTrueCredAllRes[i])
  }));

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}] [checkByUserType] [noCredAll]`, () => {
    expect(
      cred(creds.CREDS_ROLES_D, user, mocksRolesCreds[1], false)
    ).toEqual(exceptFalseRes2[i])
  }));

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}] [checkByUserType] [CredAll]`, () => {
    expect(
      cred(creds.CREDS_ROLES_D, user, mocksRolesCreds[2], false)
    ).toEqual(exceptFalseCredAllRes[i])
  }));
});

// npm run test cred.test.ts