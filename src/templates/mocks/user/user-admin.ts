import { RoleType, User } from "../../../types";


export const userAdmin: User = {
  id: `userId_123`,
  active: true,
  email: `sdf@mail.ur`,
  person: {
    firstName  : `Slava`,
    secondName : `Korzan`,
    middleName : ``
  },
  role: {
    roleId: `roleId123`,
    type: RoleType.ADMIN
  }
};
