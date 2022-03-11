import { CompanyAddType } from '../../../../../types';

export const getCardTitleByCarrier = (type: CompanyAddType) => {
  const label = type === CompanyAddType.TRANSPORT ? `транспортного средства`
              : type === CompanyAddType.DRIVER    ? `водителя` 
              : type === CompanyAddType.CONTACT   ? `контакта` : ``;
  
  return `Карточка ${label}`;
};
