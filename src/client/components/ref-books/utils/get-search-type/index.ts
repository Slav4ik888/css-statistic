import { RefBookId, SearchType } from '../../../../../types';


export const getSearchType = (refBookId: RefBookId) => {

  switch (refBookId) {
    case RefBookId.ROLES                : return SearchType.ROLES;
    case RefBookId.USERS                : return SearchType.USERS;
    case RefBookId.DRIVERS              : return SearchType.DRIVERS;
    case RefBookId.TRANSPORTS           : return SearchType.TRANSPORTS;
    case RefBookId.COMPANIES            : return SearchType.COMPANY;
    case RefBookId.CARRIERS             : return SearchType.CARRIER;
    case RefBookId.PAYER                : return SearchType.PAYER;
    case RefBookId.ADDRESSES            : return SearchType.ADDRESS;
    case RefBookId.ADDRESSES_IN_COMPANY : return SearchType.ADDRESS_IN_COMPANY;
    case RefBookId.CONTACTS             : return SearchType.CONTACT;
    case RefBookId.CONTACTS_IN_COMPANY  : return SearchType.CONTACT_IN_COMPANY;
    case RefBookId.CARGOS               : return SearchType.CARGOS;
    
    default: return SearchType.NO_SELECT;
  };
  
}