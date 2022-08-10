import { mocks } from "./mocks"
import { createUpdatedKeys } from '..';

describe(`createUpdatedKeys`, () =>
  mocks.forEach(m =>
    it(m[0].description, () =>
      expect(createUpdatedKeys(m[0].updated)).toEqual(m[1])
    )
  )
);

// npm run test create-updated-keys.test.ts
