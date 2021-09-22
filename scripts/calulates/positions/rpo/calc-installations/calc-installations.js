import { ClientType, InstallType, RangeType } from '../../../../types.js';
import calcInstTotal from './calc-inst-total.js';
// TEST import './calc-installations.test.js';


// Подсчёт инсталляций
export default function calcInstallations(DB, crs) {
  DB.CssInstDB.calc.datesEnd.forEach((obj) => {
    // console.log('obj: ', obj);
    const Range  = RangeType[obj.range];
    const Client = ClientType[obj.typeClient];
    const Inst   = InstallType[obj.typeInstall];
    
    const crsTemp = crs.install[Range][Client][Inst];
    crsTemp.value++;
    crsTemp.result += crsTemp.price;
  });

  calcInstTotal(crs);

};