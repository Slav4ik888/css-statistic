// Functions
import { getArrWithoutItemByField } from '../../../../utils/arrays/get-arr-without-item-by-field-obj';
import updateArrByArrByField from '../../../../utils/arrays/update-arr-by-arr-by-field';
import { updateArrWithItemByField } from '../../../../utils/arrays/update-arr-with-item-by-field';
import { extend } from '../../../../utils/objects/objects-base';
import { setActiveInArr } from './utils';
// Types
import { refBooksActionType as Type } from '../../action-types';
import { initialState } from './initial-state';
import { Role } from '../../../../types';



export default function (state = initialState, action: { type: Type, payload: any }) {
  switch (action.type) {
    case Type.LOADING_REF_ON:  return extend(state, { loadingRef: true });
    case Type.LOADING_REF_OFF: return extend(state, { loadingRef: false });
    case Type.LOADING_UPD_ON:  return extend(state, { loadingUpd: true });
    case Type.LOADING_UPD_OFF: return extend(state, { loadingUpd: false });
    
    // Сохраняем загруженный Справочник
    case Type.SET_REF_BOOK:
      return extend(state, {
        loadingRef: false,
        [action.payload.id]: action.payload.refBook
      });
    
    
    // Созданный Id для нового элемента Справочника
    case Type.SET_NEW_ID: return extend(state, { newId: action.payload });
      
    // ROLES
    case Type.UPDATE_ROLE:
      return extend(state, {
        loadingUpd : false,
        roles      : updateArrWithItemByField(state.roles, `id`, action.payload)
      });
    
    case Type.DELETE_ROLE:
      return extend(state, {
        loadingUpd : false,
        roles      : getArrWithoutItemByField(state.roles, `id`, { id: action.payload } as Role)
      });
    
    
    // USERS
    case Type.UPDATE_REF_USER:
      return extend(state, {
        loadingUpd : false,
        users      : updateArrWithItemByField(state.users, `id`, action.payload)
      });
      
    
    case Type.DELETE_REF_USER:
      return extend(state, {
        loadingUpd : false,
        users      : setActiveInArr(state.users, action.payload)
      });
          

    default: return state;
  }
};
