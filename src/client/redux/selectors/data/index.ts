import { State } from "../../redux-types";


export const getLoadingData = (state: State) => state.data.loading;
export const getUsers       = (state: State) => state.data.users;
