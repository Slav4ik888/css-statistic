import { getStorageData } from './local-storage.js';
import { DB_NAME } from '../../db.js';

// Читаем данные из LocalStorage
export const getAllDBFromLocalStorage = (DB) => {
  DB.CssDB     = getStorageData(DB_NAME.CssDB);
  DB.CssInstDB = getStorageData(DB_NAME.CssInstDB);
  DB.CssExpDB  = getStorageData(DB_NAME.CssExpDB);
  DB.BadcomDB  = getStorageData(DB_NAME.BadcomDB);
};