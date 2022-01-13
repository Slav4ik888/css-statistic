import { StateUI } from '../../redux-types';


export const initialState: StateUI = {
  loading       : false,
  message       : null,
  errors        : {},
  screenFormats : null,
  screenSize    : null
};
