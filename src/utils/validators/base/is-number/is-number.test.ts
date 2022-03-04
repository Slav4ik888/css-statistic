import { isNumber } from ".";

type MockItem = any;

interface Mock extends Array<MockItem | boolean> {
  0: MockItem;
  1: boolean;
};

type Mocks = Array<Mock>;

const mocks: Mocks = [
  [null, false], [undefined, false], [``, false], [`lya-lya-lya`, false], [true, false], [false, false],
  [0, true], [1, true], [109348019830, true], 
]

describe(`isNumber`, () => {
  mocks.forEach((m, i) => {
    it(`${i}`, () => expect(isNumber(m[0]))
      .toEqual(m[1]))
  })
})

// npm run test is-number.test.ts
