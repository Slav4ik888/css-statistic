import { updateArrByArrByField } from './index.js';
import mocks from './mocks.js';


describe(`updateArrByArrByField`, () => {
  mocks.forEach(m => {
    it(`Case`, () => {
      expect(updateArrByArrByField(m.lastArr, `id`, m.newArr))
        .toEqual(m.result)
    })
  })
});

// npm run test update-arr-by-arr-by-field.test.js