import { isNotNumber } from ".";

type MockItem = any;

interface Mock extends Array<MockItem | boolean> {
  0: MockItem;
  1: boolean;
};

type Mocks = Array<Mock>;

const mocks: Mocks = [
  [null, true], [undefined, true], [``, true], [`lya-lya-lya`, true], [false, true], [true, true],
  [0, false], [1, false], [109348019830, false], 
]

describe(`isNotNumber`, () => {
  mocks.forEach((m, i) => {
    it(`${i}`, () => expect(isNotNumber(m[0]))
      .toEqual(m[1]))
  })
})

// npm run test is-not-number.test.ts
