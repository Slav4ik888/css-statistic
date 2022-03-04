import validate from './index';
import { Validation, Validator } from "../../../types";
import { userAdmin } from '../../../templates/mocks';



interface MockItem {
  type: Validator;
  data: any;
}

interface Mock extends Array<MockItem | Validation> {
  0: MockItem;
  1: Validation;
};

type Mocks = Array<Mock>;

const mocks: Mocks = [
  [{ type: Validator.USER_UPDATE,    data: userAdmin },   { errors: {}, valid: true }],
]

describe(`validate`, () => {
  mocks.forEach((m, i) => {
    it(`${i}`, () => {
      expect(validate(m[0].type, m[0].data)).toEqual(m[1])
    })
  })
})

// npm run test validate.test.ts
