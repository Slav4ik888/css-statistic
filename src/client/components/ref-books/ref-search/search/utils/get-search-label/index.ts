import { SearchType } from "../../../../../../../types";


export const getSearchLabel = (type: SearchType) => {
  let str = ``;
  
  switch (type) {
    // case SearchType.ADDRESS_IN_COMPANY:
    // case SearchType.CONTACT_IN_COMPANY:
    // case SearchType.CONTACT_IN_ADDRESS: str = "Добавить"; break;
    
    default: str = "Найти";
  }
  
  return str + " или создать... введите условие для поиска...";
};
