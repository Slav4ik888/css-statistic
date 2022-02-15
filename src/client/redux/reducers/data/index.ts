// Functions
import updateArrByArrByField from '../../../../utils/arrays/update-arr-by-arr-by-field';
import { updateArrWithItemByField } from '../../../../utils/arrays/update-arr-with-item-by-field';
import { extend } from '../../../../utils/objects/objects-base';
import { sortingArr } from '../../../../utils/sorting/sorting-arr';
import { sortingOrderByArrIdx } from '../../../../utils/sorting/sorting-order-by-arr-idx';
// Types
import { dataActionType as Type } from '../../action-types';
import { initialState } from './initial-state';



export default function (state = initialState, action: { type: Type, payload: any }) {
  switch (action.type) {
    case Type.LOADING_DATA:     return extend(state, { loading: true });
    case Type.LOADING_DATA_OFF: return extend(state, { loading: false });
    
    case Type.SET_ROLES: return extend(state, {
      roles   : action.payload,
      loading : false
    });
    
    case Type.ADD_ROLE: return extend(state, {
      roles   : [...sortingArr([...state.roles, action.payload], `id`)],
      loading : false
    });

    case Type.UPDATE_ROLE: return extend(state, {
      roles   : updateArrWithItemByField(state.roles, `id`, action.payload),
      loadind : false
    })

    case Type.ADD_USER: return extend(state, {
      roles   : updateArrByArrByField(state.roles, `id`, action.payload),
      loading : false
    });

    case Type.SET_USERS:
      return extend(state, {
        loading : false,
        users   : action.payload
      });
    
    default: return state;
  }
};
