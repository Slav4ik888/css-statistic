import { CalcDbItem } from "../../../../../types";
import calcInstallTotal from "./calc-install-total";
import { getServiceItem } from "./get-service-item";
import RenderedServicesTemplate from "../../../../consts/stats/rendered-services";


// Подсчёт инсталляций
export default function fillRenderedInstallations(DB: CalcDbItem) {
  const crs = Object.assign({}, RenderedServicesTemplate);

  DB.datesEnd.forEach((obj) => {
    const serviceItem = getServiceItem(crs, obj);
    
    if (serviceItem) {
      serviceItem.count++;
      serviceItem.total += serviceItem.cost;
    }
    else {
      console.log(`ОШИБКА В ДАННЫХ по инсталляции: `, obj);
    }
  });

  // Подсчёт общей суммы инсталляций
  calcInstallTotal(crs);

  return crs;
};