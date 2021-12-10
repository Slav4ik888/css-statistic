import { DB_Name, ResGoogleBC, ResGoogleCSS } from '../../../../../../types/index';
import { setStorageData } from '../../../../../utils/local-storage/local-storage';


export default function setAllDBToLocalStorage(res1?: ResGoogleCSS, res2?: ResGoogleBC) {

  setStorageData(DB_Name.CssDB,     res1.data.DATA777.data1);
  setStorageData(DB_Name.CssExpDB,  res1.data.DATA777.data2);
  setStorageData(DB_Name.CssInstDB, res1.data.DATA777.data3);
  setStorageData(DB_Name.BadcomDB,  res2.data.DATA777.data1);
}