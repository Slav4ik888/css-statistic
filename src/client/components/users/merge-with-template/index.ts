import { getFixDateTemp, getPersonTemp, getRoleUserTemp } from "../../../../templates/db-schema";
import { User } from "../../../../types";


export default function mergeWithTemplate(data: User, userId: string): User {
  return {
    id          : data?.id           || ``, // Для нового создаваемого пользователя
    description : data?.description  || ``,
    
    active      : data?.active       || true,
    email       : data?.email        || ``,
    person      : data?.person       || getPersonTemp(),
    role        : data?.role         || getRoleUserTemp(),

    createdAt   : data?.createdAt    || getFixDateTemp(userId || data?.id),
    lastChange  : data?.lastChange   || getFixDateTemp(userId || data?.id)
  }
};
