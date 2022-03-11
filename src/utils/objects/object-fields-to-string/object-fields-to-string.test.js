import { objectFieldsToString } from './index';
import mocks from './mocks';



describe(`OBJECTS - objectFieldsToString`, () => {
  mocks.forEach((m, i) => it(`objectFieldsToString - ${i}`, () => {
    expect(objectFieldsToString(m.TEST)).toEqual(m.RESULT);
  }));
});

// npm run test get-object-fields-to-string.test.js