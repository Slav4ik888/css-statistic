import { CompanyAddType } from '../../../../../types';

export const getAddBtnLabelByType = (type: CompanyAddType) => {
  switch (type) {
    case CompanyAddType.TRANSPORT : return `Транспорт`
    case CompanyAddType.DRIVER    : return `Водителя`
    case CompanyAddType.CONTACT   : return `Контакт`
    
    default: return ``;
  }
};
