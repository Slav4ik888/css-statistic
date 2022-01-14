import { Person } from "../../../../../../../../types";


interface MockItem {
  person : Person;
  short? : boolean;
};


interface Mock extends Array<MockItem | string> {
  0: MockItem;
  1: string;
};

export type Mocks = Array<Mock>;
