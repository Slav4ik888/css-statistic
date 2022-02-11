import { getEmptyRole } from '..';
import { Role } from '../../../../../../../../../../types';

const emptyRole: Role = {
  id    : ``,
  role  : ``,
  creds : {}
};

describe(`getEmptyRole`, () => {
  it(`getEmptyRole`, () => expect(getEmptyRole()).toEqual(emptyRole))
});

// npm run test get-empty-role.test.ts
