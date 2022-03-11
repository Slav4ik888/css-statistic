import { TableType } from '../../../../../types';


export const getTableTypeByRefBookId = (refBookId: string) => {

  switch (refBookId) {
    case `roles`:      return TableType.ROLES;
    case `users`:      return TableType.USERS;
    case `drivers`:    return TableType.DRIVERS;
    case `transports`: return TableType.TRANSPORTS;
    case `companies`:  return TableType.COMPANIES;
    case `addresses`:  return TableType.ADDRESSES;
    case `contacts`:   return TableType.CONTACTS;
    case `cargos`:     return TableType.CARGOS;
  
    default: return null;
  }
};