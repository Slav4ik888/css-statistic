import { Roles } from "../../../../../../types";
import { Mocks, MockItem } from "./types";

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
  [ { description: `roleId верный`,            roleId: `789`,     roles }, `StoreKeeper`],
  [ { description: `roleId неверный`,          roleId: `111`,     roles }, ``],
  [ { description: `roleId undefined`,         roleId: undefined, roles }, ``],

  [ { description: `roles undefined`,          roleId: `789`,     roles: undefined }, ``],
  [ { description: `roles & roleId undefined`, roleId: undefined, roles: undefined }, ``],

  [ { description: `roleId abpsent, roles undefined`, roles:  undefined } as MockItem, ``],
  [ { description: `roles abpsent, roleId undefined`, roleId: undefined } as MockItem, ``],
  [ { description: `without all fields`, } as MockItem, ``],
];
