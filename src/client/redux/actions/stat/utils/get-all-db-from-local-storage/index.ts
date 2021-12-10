import { DB_Name, ResGoogleBC, ResGoogleCSS } from '../../../../../../types/index';
import { getStorageData } from '../../../../../utils/local-storage/local-storage';


/** 
 *  Читаем данные из LocalStorage по всем сохранённым данным из Гугл
 */
export const getAllDBFromLocalStorage = () => {
  const res1: ResGoogleCSS = {
    data: {
      DATA777: {
        data1: getStorageData(DB_Name.CssDB),
        data2: getStorageData(DB_Name.CssExpDB),
        data3: getStorageData(DB_Name.CssInstDB)
      }
    }
  };

  const res2: ResGoogleBC = {
    data: {
      DATA777: {
        data1: getStorageData(DB_Name.BadcomDB),
      }
    }
  }

  return { res1, res2 };
};