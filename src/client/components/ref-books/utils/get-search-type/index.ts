import { RefbookId, SearchType } from '../../../../../types';


export const getSearchType = (refbookId: RefbookId) => {

  switch (refbookId) {
    case RefbookId.ROLES : return SearchType.ROLES;
    case RefbookId.USERS : return SearchType.USERS;
    
    default: return SearchType.NO_SELECT;
  };
}
