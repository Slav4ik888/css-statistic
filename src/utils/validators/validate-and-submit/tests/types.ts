import { Validator } from "../../../../types";

interface MockItem {
  type  : Validator;
  data  : object;
  exit? : boolean;
};

interface MockResult {
  onSubmit : boolean;
  onError  : boolean;
  isChange : boolean;
  open     : boolean;
  close    : boolean;
};

interface Mock extends Array<MockItem | MockResult> {
  0: MockItem;
  1: MockResult;
};

export type Mocks = Array<Mock>;
