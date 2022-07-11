// Functions
import { getArrWithoutItemById, updateArrById } from '../../../../utils/arrays';
import { extend } from '../../../../utils/objects/objects-base';
import { setActiveInArr } from './utils';
// Types
import { refBooksActionType as Type } from '../../action-types';
import { initialState } from './initial-state';
import { StateRefBooks } from '../../redux-types';



export default function (state = initialState as StateRefBooks, action: { type: Type, payload: any }) {
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
    case Type.SET_ROLES: return extend(state, {
      loadingRef : false, 
      loadingUpd : false,
      roles      : action.payload
    });
      
    case Type.UPDATE_ROLE:
      return extend(state, {
        loadingUpd : false,
        roles      : updateArrById(state.roles, action.payload)
      });
    
    case Type.DELETE_ROLE:
      return extend(state, {
        loadingUpd : false,
        roles      : getArrWithoutItemById(state.roles, action.payload)
      });
    
    
    // USERS
    case Type.SET_USERS: return extend(state, {
      loadingRef : false, 
      loadingUpd : false,
      users      : action.payload
    });

    case Type.UPDATE_REF_USER:
      return extend(state, {
        loadingUpd : false,
        users      : updateArrById(state.users, action.payload)
      });
      
    
    case Type.DELETE_REF_USER:
      return extend(state, {
        loadingUpd : false,
        users      : setActiveInArr(state.users, action.payload)
      });
          

    default: return state;
  }
};
