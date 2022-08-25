import { CalcDBsType, RenderedServices } from "../../../../types";
import createRenderedServices from "./create-rendered-services";
import fillRenderedInstallations from "./fill-rendered-installations";

// Стоимость оказанных услуг
export default function calcCostRenderedServices(
  DBs: CalcDBsType //, dateStart: string, dateEnd: string
): RenderedServices {

  // Наполнение crs данными
  const
    crs      = fillRenderedInstallations(DBs.cssInstDb),
    services = createRenderedServices(crs);

  // Подсчёт итоговой суммы
  // calcTotal(crs)

  return services;
};