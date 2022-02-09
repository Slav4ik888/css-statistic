import { Roles } from "../../../../../types";


export const getRoleNameById = (roles: Roles, roleId: string) => {
  return roles?.find(r => r.id === roleId)?.role || ``;
};
