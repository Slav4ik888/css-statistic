import { getRoleNameById } from '..';
import { roles, mocks } from './mocks';



describe(`getRoleNameById`, () => {
  
  mocks.forEach(m => it(`getRoleNameById`,
    () => expect(getRoleNameById(roles, m[0])).toEqual(m[1])))
});

// npm run test get-role-name-by-id.test.ts
