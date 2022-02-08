import { getRoleIdByRole } from '..';
import { roles, mocks } from './mocks';



describe(`getRoleIdByRole`, () => {
  
  mocks.forEach(m => it(`getRoleIdByRole`,
    () => expect(getRoleIdByRole(roles, m[0])).toEqual(m[1])))
});

// npm run test get-role-id-by-role.test.ts
