import { CalcDBsType, IncidentsData } from "../../../../types";
import calcPersonsIncidents from "./calc-persons-incidents";
import { getPersons } from "./get-person";


export default function calcTehnicalIndividual(DBs: CalcDBsType): IncidentsData {

  // Создаём массив уникальных Person
  const persons = getPersons(DBs);
  
  // Подсчёт баллов
  const result = calcPersonsIncidents(DBs, persons);

  return result;
}