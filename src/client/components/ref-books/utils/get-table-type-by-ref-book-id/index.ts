import { TableType } from '../../../../../types';


export const getTableTypeByRefBookId = (refBookId: string) => {

  switch (refBookId) {
    case `roles`:      return TableType.ROLES;
    case `users`:      return TableType.USERS;
  
    default: return null;
  }
};
