// Functions
import { extend } from '../../../../utils/objects/objects';
// Types
import { uiActionType } from '../../action-types';
import { initialState } from './initial-state';



export default function (state = initialState, action: { type: uiActionType, payload: any }) {
  switch (action.type) {
    case uiActionType.LOADING_UI:
      return extend(state, {
        loading: true,
      });
    
    case uiActionType.LOADING_UI_OFF:
      return extend(state, {
        loading: false,
      });
    
    case uiActionType.SET_ERROR:
      return extend(state, {
        loading: false,
        errors: action.payload
      });

    case uiActionType.CLEAR_ERROR:
      return extend(state, {
        loading: false,
        errors: null
      });

    case uiActionType.SET_MESSAGE:
      return extend(state, {
        loading: false,
        message: action.payload
      });

    case uiActionType.CLEAR_MESSAGE:
      return extend(state, {
        loading: false,
        message: null
      });

    
    default: return state;
  }
};
