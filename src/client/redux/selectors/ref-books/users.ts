import { createSelector } from "reselect";
import { State } from "../../redux-types";
import { getProps } from "../universal";

export const getUsers    = (state: State) => state.refbooks.users;

export const getUserById = createSelector(
  getUsers,
  getProps,
  (allUsers, { userId }: { userId: string }) => {
    if (!userId) return null;
    return allUsers?.find((user => user.id === userId))
  }
);
