import { CalcDBsType } from "../../../../../../types";


export default function calcIncidents(filtred: CalcDBsType) {
  return filtred.cssDb?.datesEnd?.length + filtred.badcomDb?.datesEnd?.length
}
