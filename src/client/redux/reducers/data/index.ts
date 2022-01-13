// Functions
import { extend } from '../../../../utils/objects/objects-base';
// Types
import { dataActionType as Type } from '../../action-types';
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
    
    case Type.SET_USERS:
      return extend(state, {
        loading: false,
        users: action.payload
      });
    
    default: return state;
  }
};
