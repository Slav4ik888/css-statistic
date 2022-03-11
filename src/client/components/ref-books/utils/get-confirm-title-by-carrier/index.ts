import { CompanyAddType } from '../../../../../types';

export const getConfirmTitleByCarrier = (type: CompanyAddType) => {
  const label = type === CompanyAddType.TRANSPORT ? `это транспортное средство`
              : type === CompanyAddType.DRIVER    ? `этого водителя` 
              : type === CompanyAddType.CONTACT   ? `этот контакт` : ``;
  
  return `Удалить ${label}`;
};
