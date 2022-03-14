import { validator } from "..";
import { Role } from "../../../../../types";
import { mocks } from './mocks';



describe(`Validator role`, () => {
  mocks.forEach(m => {
    it(m[0].description, () => {
      expect(validator(m[0].role as Role)).toEqual(m[1])
    })
  })
});

// npm run test role-update.test.ts
