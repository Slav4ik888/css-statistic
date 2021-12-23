import calcCostRenderedServices from "./calc-cost-rendered-services";
import getFiltredData from "./filters/get-filtred-dbs";
import emptyResults from './calc-cost-rendered-services/empty-results';
import calcTotalTechnicalData from "./calc-cost-rendered-services/calc-total-technical-data";
import calcTechDirector from "./calc-tech-director";
import calcTehnicalIncidents from "./calc-tech-incidents";
// Types
import { CalcResults, DBsType } from "../../../types";
// Mocks
// import mockTehnicalIndividual from '../../components/mocks/data/tehnical-individual';
// import mockRenderedServices from '../../components/mocks/data/rendered-services';
// import mockTechDirector from '../../components/mocks/data/tech-director';


// Расчёт всей статистики
export default function calcsAllResults(DBs: DBsType, dateStart: string, dateEnd: string): CalcResults {
  if (!dateStart || !dateEnd) return emptyResults;

  // Отбор значений из промежутка дат
  const filtred = getFiltredData(DBs, dateStart, dateEnd);

  
  return { 
    incidents       : calcTehnicalIncidents(filtred),
    
    headOfTechnical : {
      totalTechnical   : calcTotalTechnicalData(filtred, dateEnd),
      renderedServices : calcCostRenderedServices(filtred), // dateStart, dateEnd)
    },

    techDirector    : calcTechDirector(filtred)
  };
}