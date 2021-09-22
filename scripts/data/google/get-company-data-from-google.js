import { getFromGoogle } from './get-from-google.js';
import { DB_NAME } from '../../db.js';
import { URL_G_CSS, URL_G_BADCOM } from '../../consts.js';
import { setStorageData } from '../local-storage/local-storage.js';
// Loader
import { loaderStart, loaderStop } from '../../display/loader/loader.js';
// Display
import logger from '../../display/logger/logger.js';
const log = logger(`get-data`);


// Читаем данные из Гугл CSS и сохраняем в LocalStorage
/**
 * 
 * @param {object} DB - куда сохранять
 */
export async function getCSSData(DB) {
  loaderStart(`Загружаем CSS...`);
  const data = await getFromGoogle(URL_G_CSS);
  log('data: ', data);
  loaderStop();

  DB.CssDB.db = [...data.data1];
  setStorageData(DB_NAME.CssDB, DB.CssDB);

  DB.CssInstDB.db = [...data.data3];
  setStorageData(DB_NAME.CssInstDB, DB.CssInstDB);

  DB.CssExpDB.db = [...data.data2];
  setStorageData(DB_NAME.CssExpDB, DB.CssExpDB);
};



// Читаем данные из Гугл BADCOM и сохраняем в LocalStorage
/**
 * 
 * @param {object} DB - куда сохранять
 */
export async function getBadcomData(DB) {
  loaderStart(`Загружаем BC...`);
  const data = await getFromGoogle(URL_G_BADCOM);
  log('data: ', data);
  loaderStop();

  DB.BadcomDB.db = Array.from(data.data1);
  setStorageData(DB_NAME.BadcomDB, DB.BadcomDB);
};