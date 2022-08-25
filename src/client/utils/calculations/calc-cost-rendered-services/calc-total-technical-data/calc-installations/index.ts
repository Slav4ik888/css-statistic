import { CalcDBsType } from "../../../../../../types";


export default function calcInstallations(filtred: CalcDBsType) {
  return filtred.cssInstDb?.datesEnd?.length
}