import { State } from '../../redux-types';


export const getLoadingUI      = (state: State) => state.UI.loading;

export const getMessage        = (state: State) => state.UI.message;

export const getScreenFormats  = (state: State) => state.UI.screenFormats;

export const getScreenSize     = (state: State) => state.UI.screenSize;

export const getErrors         = (state: State) => state.UI.errors;
