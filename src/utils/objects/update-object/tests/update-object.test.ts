import { updateObject } from '..';
import { mocks } from './mocks';


describe(`OBJECTS - updateObject`, () => {
  mocks.forEach(m => {
    it(m[0].description, () => {
      expect(updateObject(m[0].prevObj, m[0].updatedFields)).toEqual(m[1]);
    })
  });
});

// npm run test update-object.test.ts
