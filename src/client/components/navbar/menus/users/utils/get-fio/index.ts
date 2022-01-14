import { Person } from "../../../../../../../types";


export const getFio = (person: Person, short?: boolean) => {
  const f = person?.firstName  || ``;
  const s = person?.secondName || ``;
  const m = person?.middleName || ``;

  let fio = ``;
  s && (fio += s + " ");
  
  if (short) {
    f ? fio += f[0] + "." : "?."
    m ? fio += m[0] + "." : "?."
  }
  else {
    f && (fio += f + " ")
    fio += m;
  }
  return fio.trim();
};