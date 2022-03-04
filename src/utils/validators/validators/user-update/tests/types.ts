import { Validation, User } from "../../../../../types";


interface MockItem {
  description : string;
  user        : User;
}

interface Mock extends Array<MockItem | Validation> {
  0: MockItem;
  1: Validation;
};

export type Mocks = Array<Mock>;