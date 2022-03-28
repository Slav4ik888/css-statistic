import { getNewRole } from '..';
import { mocks } from './mocks';


describe(`getNewRole`, () => {
  
  mocks.forEach(m => it(`getNewRole`, () => {
    const result = getNewRole(m[0].userId);
    result.createdAt.date  = `28.03.22`;
    result.lastChange.date = `28.03.22`;
    
    expect(result).toEqual(m[1])
  }))
});

// npm run test get-new-role.test.ts
