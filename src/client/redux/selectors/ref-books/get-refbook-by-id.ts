import { createSelector } from "reselect";
import { RefBookId } from "../../../../types";
import { getProps, getState } from "../universal";

export const getRefBookById = createSelector(
  getState,
  getProps,
  (state, { refBookId }: { refBookId: RefBookId }) => {

    switch (refBookId) {
      case RefBookId.USERS: return state.refbooks.users;
      case RefBookId.ROLES: return state.refbooks.roles;
      
      default: return state[refBookId]
    }
  }
);
