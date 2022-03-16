import { Role } from "../../../../../types";


export const getRoleNameById = (roles: Array<Role>, roleId: string) => {
  return roles.find(r => r.id === roleId)?.role || ``;
}