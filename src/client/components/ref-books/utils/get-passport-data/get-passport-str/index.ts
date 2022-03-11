import { Passport } from "../../../../../../types";

export default function getPassportStr(p: Passport): string {
  return p.series + ` ` + p.number + ` выдан: ` + p.goverment + ` ` + p.date + ` код-подразделения ` + p.kod;
}