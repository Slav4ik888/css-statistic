import { CalcDBsType, IncidentsData, IncidentStripItem } from "../../../../../types";
import { calcNumberOf, calcResultBalls, calcValueOf } from "../calculates";


const template = {
  label         : ``,
  countsCss     : 0,
  scoresCss     : 0,
  countsInstCss : 0,
  scoresInstCss : 0,
  scoresExpCss  : 0,
  countsBadcom  : 0,
  scoresBadcom  : 0,
  total         : 0,
};


/**
 * Считаем данные по каждому Person и каждому значению
 */
export default function calcPersonsIncidents(
  DBs       : CalcDBsType,
  persons   : Array<string>,
) {

  let result: IncidentsData = [];

  persons.forEach(person => {
    const obj: IncidentStripItem = Object.assign({}, template);
    obj.label = person;
    obj.countsCss     = calcNumberOf   (DBs.cssDb     .datesReg, `personReg`, person);
    obj.scoresCss     = calcValueOf    (DBs.cssDb     .datesEnd, `personEnd`, person);
    obj.countsInstCss = calcNumberOf   (DBs.cssInstDb .datesReg, `personReg`, person);
    obj.scoresInstCss = calcValueOf    (DBs.cssInstDb .datesEnd, `personEnd`, person);
    obj.scoresExpCss  = calcValueOf    (DBs.cssExpDb  .datesEnd, `personEnd`, person);
    obj.countsBadcom  = calcNumberOf   (DBs.badcomDb  .datesReg, `personReg`, person);
    obj.scoresBadcom  = calcValueOf    (DBs.badcomDb  .datesEnd, `personEnd`, person);

    obj.total         = calcResultBalls(obj);
    
    result.push(obj);
  });

  return result;
};

