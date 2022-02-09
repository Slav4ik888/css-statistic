import { Roles } from "../../../../../types";


export const getRoleIdByRole = (roles: Roles, role: string) => {
  return roles.find(r => r.role === role)?.id || ``;
};
