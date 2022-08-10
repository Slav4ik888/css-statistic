
interface MockItem {
  description : string;
  updated     : object;
}

type MockResult = object;

interface Mock extends Array<MockItem | MockResult> {
  0: MockItem;
  1: MockResult;
}

export type Mocks = Mock[]
