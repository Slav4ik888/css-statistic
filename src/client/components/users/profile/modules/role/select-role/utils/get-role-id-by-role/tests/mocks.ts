import { Roles } from "../../../../../../../../../../types";
import { Mocks } from "./types";

export const creds = [
  {
    id: `100500`
  },
  {
    id: `200500`
  },
  {
    id: `300500`
  }
]
export const roles: Roles = [
  {
    id: `123`,
    role: `Director`,
    creds: creds[0]
  }, {
    id: `456`,
    role: `Manager`,
    creds: creds[1]
  }, {
    id: `789`,
    role: `StoreKeeper`,
    creds: creds[2]
  }
];


export const mocks: Mocks = [
  [ `StoreKeeper`, `789`],
  [ `111`,     ``],
  [ undefined, ``],
];
