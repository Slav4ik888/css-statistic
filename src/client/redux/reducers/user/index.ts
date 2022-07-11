// Functions
import { extend } from '../../../../utils/objects/objects-base';
// Types
import { userActionType } from '../../action-types';
import { initialState } from './initial-state';



export default function (state = initialState, action: { type: userActionType, payload: any }) {
  switch (action.type) {
    case userActionType.LOADING_USER:
      return extend(state, {
        loading: true,
      });
    
    case userActionType.LOADING_USER_OFF:
      return extend(state, {
        loading: false,
      });
    
    case userActionType.SET_AUTHENTICATED:
      return extend(state, {
        loading       : false,
        authenticated : true
      });
    
    case userActionType.SET_UNAUTHENTICATED:
      return extend(state, {
        loading       : false,
        authenticated : false
      });
    
    case userActionType.SET_USER:
      return extend(state, {
        loading       : false,
        authenticated : true,
        user          : action.payload
      });
    
    case userActionType.UPDATE_USER:
      return extend(state, {
        loading : false,
        user    : { ...state.user, ...action.payload }
      });
    
    default: return state;
  }
};
