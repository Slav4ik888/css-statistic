import whoseCred from ".."
import { FixDate, User } from "../../../../types";

type MockItemFirst  = { createdAt: FixDate, user: Partial<User> };
type MockItemSecond = boolean;
interface MockItem extends Array<MockItemFirst | MockItemSecond> {
  0: MockItemFirst;
  1: MockItemSecond;
};
type Mocks = Array<MockItem>;


const mocks: Mocks = [
  [{
    createdAt : { userId: `right`, date: `21` },
    user      : { id: `right` }
  }, true],

  [{
    createdAt : { userId: `right`, date: `21` },
    user      : { id: `wrong` }
  }, false],

  [{
    createdAt : { undefined } as unknown as FixDate,
    user      : { id: undefined }
  }, false],

  [undefined, false],
  [null,      false],
];
  

describe(`whoseCred`, () => {
  mocks.forEach((mock, i) => {
    it(`[${mock[0]?.createdAt.userId || mock[0]}]`, () => expect(
      whoseCred(mock[0]?.createdAt, mock[0]?.user as unknown as User))
      .toEqual(mock[1]))
  })
});

// npm run test whose-cred.test.ts