import { getFixDateTemp, getPersonTemp } from "../../../../../../../templates/db-schema";
import { RoleType, User } from "../../../../../../../types";


export default function mergeWithTemplate(data: User): User {
  return {
    id          : data?.id           || ``, // Для нового создаваемого пользователя
    description : data?.description  || ``,
    
    active      : data?.active       || true,
    email       : data?.email        || ``,
    person      : data?.person       || getPersonTemp(),
    role        : data?.role         || {
                                          type   : RoleType.USER,
                                          roleId : ``
                                        },
                                        
    createdAt   : data?.createdAt    || getFixDateTemp(data?.id),
    lastChange  : data?.lastChange   || getFixDateTemp(data?.id)
}};