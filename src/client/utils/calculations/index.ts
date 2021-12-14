import { DBsType } from "../../../types";
import getFiltredData from "./filters/get-filtred-dbs";


export default function calcsAllResults(
  DBs: DBsType, dateStart: string, dateEnd: string
) {
  if (!dateStart || !dateEnd) return {}

  const filtred = getFiltredData(DBs, dateStart, dateEnd);


 return filtred;
}