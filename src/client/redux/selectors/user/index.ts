import { State } from '../../redux-types';


export const getLoadingUser    = (state: State) => state.user.loading;

export const getAuthenticated  = (state: State) => state.user.authenticated;

export const getUser           = (state: State) => state.user.user;
export const getUserId         = (state: State) => state.user.user.id;
