import { getRoleNameById } from '..';
import { mocks } from './mocks';



describe(`getRoleNameById`, () => {
  
  mocks.forEach(m => it(m[0].description,
    () => expect(getRoleNameById(m[0].roles, m[0].roleId)).toEqual(m[1])))
});

// npm run test get-role-name-by-id.test.ts
