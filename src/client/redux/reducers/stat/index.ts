// Functions
import { extend } from '../../../../utils/objects/objects';
// Types
import { statActionType as Type } from '../../action-types';
import { initialState } from './initial-state';



export default function (state = initialState, action: { type: Type, payload: any }) {
  switch (action.type) {
    case Type.LOADING_DATA:
      return extend(state, {
        loading: true,
      });
    
    case Type.LOADING_DATA_OFF:
      return extend(state, {
        loading: false,
      });
    
    case Type.SET_INITIAL:
      return initialState;
    
    case Type.SET_SELECTED_DATES:
      return extend(state, { selectedDates: action.payload })
    
    case Type.SET_CSS_DB:
      return extend(state, {
        loading: false,
        cssDb: action.payload
      });

    case Type.SET_CSS_INST_DB:
      return extend(state, {
        loading: false,
        cssInstDb: action.payload
      });

    case Type.SET_CSS_EXP_DB:
      return extend(state, {
        loading: false,
        cssExpDb: action.payload
      });

    case Type.SET_BC_DB:
      return extend(state, {
        loading: false,
        badcomDb: action.payload
      });

    default: return state;
  }
};
