import { createSelector } from "reselect";
import { Roles } from "../../../../types";
import { State } from "../../redux-types";
import { getProps } from "../universal";

export const getRoles       = (state: State) => state.refbooks.roles;

export const getRoleById    = createSelector(
  getRoles,
  getProps,
  (allRoles: Roles, { roleId, user }) => {
    const id = roleId || user?.role?.roleId;
    return allRoles?.find((role => role.id === id))
  }
);

export const getRoleByItem = createSelector(
  getRoles,
  getProps,
  (allRoles: Roles, { item }) => {
    if (!allRoles?.length || !item) return null;

    return allRoles
      ?.find((role => role.id === item.role.roleId))
      ?.role
  }
);
