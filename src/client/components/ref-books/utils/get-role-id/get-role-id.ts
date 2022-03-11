import { Role } from "../../../../../types";


export const getRoleId = (roles: Array<Role>, role: string) => {
  return roles.find(r => r.role === role)?.id || ``;
}