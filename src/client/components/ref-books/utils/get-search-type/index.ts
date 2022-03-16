import { RefBookId, SearchType } from '../../../../../types';


export const getSearchType = (refBookId: RefBookId) => {

  switch (refBookId) {
    case RefBookId.ROLES : return SearchType.ROLES;
    case RefBookId.USERS : return SearchType.USERS;
    
    default: return SearchType.NO_SELECT;
  };
}
