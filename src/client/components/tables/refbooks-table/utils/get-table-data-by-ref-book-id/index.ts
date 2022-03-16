import { users, roles } from '../../header/header-templates';


export const getTableDataByRefBookId = (refBookId: string) => {

  switch (refBookId) {
    case `roles`:      return roles;
    case `users`:      return users;
  
    default: return null;
  }
};
