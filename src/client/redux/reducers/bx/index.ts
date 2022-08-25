// Functions
import { extend } from '../../../../utils/objects/objects-base';
// Types
import { bxActionType as Type } from '../../action-types';
import { initialState } from './initial-state';
import { StateRefBooks } from '../../redux-types';



export default function (state = initialState as StateRefBooks, action: { type: Type, payload: any }) {
  switch (action.type) {
    case Type.LOADING_BX:     return extend(state, { loading: true });
    case Type.LOADING_BX_OFF: return extend(state, { loading: false });
   
    default: return state;
  }
};
