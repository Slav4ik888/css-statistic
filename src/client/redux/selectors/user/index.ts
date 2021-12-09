import { State } from '../../redux-types';


export const getLoadingUser    = (state: State) => state.user.loading;

export const getAuthenticated  = (state: State) => state.user.authenticated;
