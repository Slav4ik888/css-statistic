import { Validation, Role } from "../../../../../types";


interface MockItem {
  description : string;
  role        : Role;
}

interface Mock extends Array<MockItem | Validation> {
  0: MockItem;
  1: Validation;
};

export type Mocks = Array<Mock>;
