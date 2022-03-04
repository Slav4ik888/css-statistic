import { validator } from "..";
import { User } from "../../../../../types";
import { mocks } from './mocks';



describe(`Validator user`, () => {
  mocks.forEach(m => {
    it(m[0].description, () => {
      expect(validator(m[0].user as User)).toEqual(m[1])
    })
  })
});

// npm run test user-update.test.ts