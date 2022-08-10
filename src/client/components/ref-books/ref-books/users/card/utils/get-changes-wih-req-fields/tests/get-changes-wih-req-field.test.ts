import { getChangesWithRequiredFields } from "..";
import { User } from "../../../../../../../../../types";
import { mocks } from "./mocks";


describe(`getChangesWithRequiredFields`, () => {
  mocks.forEach(m => it(m[0].description, () => {
    expect(getChangesWithRequiredFields(m[0].stored as User, m[0].updated)).toEqual(m[1])
  }))
});

// npm run test get-changes-wih-req-fields.test.ts
