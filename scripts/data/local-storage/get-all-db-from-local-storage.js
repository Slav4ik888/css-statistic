import { getStorageData } from './local-storage.js';
import { DB_NAME } from '../../db.js';


// Читаем данные из LocalStorage
export const getAllDBFromLocalStorage = (DB) => {
  const cssDB     = getStorageData(DB_NAME.CssDB);
  const cssInstDB = getStorageData(DB_NAME.CssInstDB);
  const cssExpDB  = getStorageData(DB_NAME.CssExpDB);
  const badcomDB  = getStorageData(DB_NAME.BadcomDB);

  cssDB     ? DB.CssDB     = cssDB     : DB.CssDB     = [];
  cssInstDB ? DB.CssInstDB = cssInstDB : DB.CssInstDB = [];
  cssExpDB  ? DB.CssExpDB  = cssExpDB  : DB.CssExpDB  = [];
  badcomDB  ? DB.BadcomDB  = badcomDB  : DB.BadcomDB  = [];

  // console.log(`From LS ${DB_NAME.CssDB} `, DB.CssDB);
  // console.log(`From LS ${DB_NAME.CssInstDB} `, DB.CssInstDB);
  // console.log(`From LS ${DB_NAME.CssExpDB} `, DB.CssExpDB);
};