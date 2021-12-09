// Functions
import { extend } from '../../../../utils/objects/objects';
// Types
import { dataActionType } from '../../action-types';
import { initialState } from './initial-state';



export default function (state = initialState, action: { type: dataActionType, payload: any }) {
  switch (action.type) {
    case dataActionType.LOADING_DATA:
      return extend(state, {
        loading: true,
      });
    
    case dataActionType.LOADING_DATA_OFF:
      return extend(state, {
        loading: false,
      });
    
    case dataActionType.SET_INITIAL:
      return initialState;
    
    case dataActionType.SET_SELECTED_DATES:
      return extend(state, { selectedDates: action.payload })
    
    case dataActionType.SET_CSS_DB:
      return extend(state, {
        loading: false,
        cssDb: action.payload
      });

    case dataActionType.SET_CSS_INST_DB:
      return extend(state, {
        loading: false,
        cssInstDb: action.payload
      });

    case dataActionType.SET_CSS_EXP_DB:
      return extend(state, {
        loading: false,
        cssExpDb: action.payload
      });

    case dataActionType.SET_BC_DB:
      return extend(state, {
        loading: false,
        badcomDb: action.payload
      });

    default: return state;
  }
};
