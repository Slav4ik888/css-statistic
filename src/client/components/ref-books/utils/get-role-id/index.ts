import { Roles } from "../../../../../types";


export const getRoleId = (roles: Roles, role: string) => {
  return roles.find(r => r.role === role)?.id || ``;
}
