import { Role } from "../../../../../../types";

interface MockItem {
  description : string;
  userId      : string;
};

type ResultItem = Role;


interface Mock extends Array<MockItem | ResultItem> {
  0: MockItem;
  1: ResultItem;
};

export type Mocks = Array<Mock>;
