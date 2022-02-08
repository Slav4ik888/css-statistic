

interface MockItem {
  data: object,
  scheme: object
};


interface Mock extends Array<MockItem | any> {
  0: MockItem;
  1: any;
};

export type Mocks = Array<Mock>;
