// Functions
import { extend } from '../../../../utils/objects/objects-base';
// Types
import { statsActionType as Type } from '../../action-types';
import { initialState } from './initial-state';



export default function (state = initialState, action: { type: Type, payload: any }) {
  switch (action.type) {
    case Type.LOADING_STATS:
      return extend(state, {
        loading: true,
      });
    
    case Type.LOADING_STATS_OFF:
      return extend(state, {
        loading: false,
      });
    
    case Type.SET_INITIAL:
      return initialState;
    
    case Type.SET_SELECTED_DATES:
      return extend(state, { selectedDates: action.payload })
    
    case Type.SET_CSS_DB:
      return extend(state, {
        cssDb: action.payload
      });

    case Type.SET_CSS_INST_DB:
      return extend(state, {
        cssInstDb: action.payload
      });

    case Type.SET_CSS_EXP_DB:
      return extend(state, {
        cssExpDb: action.payload
      });

    case Type.SET_BC_DB:
      return extend(state, {
        badcomDb: action.payload
      });

    default: return state;
  }
};
