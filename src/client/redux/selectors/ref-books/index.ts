import { State } from "../../redux-types";


export const getLoadingRef  = (state: State) => state.refbooks.loadingRef;
export const getLoadingUpd  = (state: State) => state.refbooks.loadingUpd;
export const getNewId       = (state: State) => state.refbooks.newId;

export const getUsers       = (state: State) => state.refbooks.users;
export const getRoles       = (state: State) => state.refbooks.roles;
