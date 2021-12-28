import checkCredential from ".."
import creds from '../../actual-creds';
import { mocksUsers } from '../../mocks/mocks-user';
import { mocksRolesCreds } from '../../mocks/mocks-roles-creds';
//                     Type =  Super  Admin  User    Null   
//                                                          active  null
//                                                          = 
//                                                          false
const Res                   = [true,  true,  false,  false, false,  false];
const exceptRes             = [true,  false, false,  false, false,  false];
const exceptCredAllRes      = [true,  false, false,  false, false,  false];
const Res2                  = [true,  true,  true,   false, false,  false];
const CredAllRes            = [true,  true,  true,   false, false,  false];


describe(`checkCredential`, () => {

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}] [checkByUserType] [noCredAll]`, () => {
    expect(
      checkCredential(creds.CREDS_ROLES_D, user, mocksRolesCreds[0], false)
        .valid
    ).toEqual(Res[i])
  }));

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}] [exception] [noCredAll]`, () => {
    expect(
      checkCredential(creds.CREDS_ROLES_D, user, mocksRolesCreds[0], false, true)
        .valid
    ).toEqual(exceptRes[i])
  }));

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}] [exception] [CredAll]`, () => {
    expect(
      checkCredential(creds.CREDS_ROLES_D, user, mocksRolesCreds[1], true, true)
        .valid
    ).toEqual(exceptCredAllRes[i])
  }));

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}] [checkByUserType] [noCredAll]`, () => {
    expect(
      checkCredential(creds.CREDS_ROLES_D, user, mocksRolesCreds[1], false)
        .valid
    ).toEqual(Res2[i])
  }));

  mocksUsers.forEach((user, i) => it(`[${user?.role?.type}] [checkByUserType] [CredAll]`, () => {
    expect(
      checkCredential(creds.CREDS_ROLES_D, user, mocksRolesCreds[2], false)
        .valid
    ).toEqual(CredAllRes[i])
  }));
});

// npm run test check-credential.test.ts