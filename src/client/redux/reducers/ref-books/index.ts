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
    case Type.LOADING_REF_ON:  return extend(state, { loading: true });
    case Type.LOADING_REF_OFF: return extend(state, { loading: false });
    
    // Сохраняем загруженный Справочник
    case Type.SET_REF_BOOK:
      return extend(state, {
        loading: false,
        [action.payload.id]: action.payload.refBook
      });
    
    
    // Созданный Id для нового элемента Справочника
    case Type.SET_NEW_ID: return extend(state, { newId: action.payload });

    // ROLES
    case Type.SET_ROLES: return extend(state, {
      loading : false, 
      roles   : action.payload
    });
      
    case Type.UPDATE_ROLE:
      return extend(state, {
        loading : false,
        roles   : updateArrById(state.roles, action.payload)
      });
    
    case Type.DELETE_ROLE:
      return extend(state, {
        loading : false,
        roles   : getArrWithoutItemById(state.roles, action.payload)
      });
    
    
    // USERS
    case Type.SET_USERS: return extend(state, {
      loading : false, 
      users   : action.payload
    });

    case Type.UPDATE_REF_USER:
      return extend(state, {
        loading : false,
        users   : updateArrById(state.users, action.payload, `update`)
      });
      
    
    case Type.DELETE_REF_USER:
      return extend(state, {
        loading : false,
        users   : setActiveInArr(state.users, action.payload)
      });
          

    default: return state;
  }
};
