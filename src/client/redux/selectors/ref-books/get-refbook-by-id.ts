import { createSelector } from "reselect";
import { RefbookId } from "../../../../types";
import { getProps, getState } from "../universal";

export const getRefbookById = createSelector(
  getState,
  getProps,
  (state, { refbookId }: { refbookId: RefbookId }) => {

    switch (refbookId) {
      case RefbookId.USERS: return state.refbooks.users;
      case RefbookId.ROLES: return state.refbooks.roles;
      
      default: return state[refbookId]
    }
  }
);
