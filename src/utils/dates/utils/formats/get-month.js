import { SUB, MONTH_NAME_RU, MONTH_NAME, MONTH_NAME_RU_DEC } from '../index.js';


export const getMonth = (date, sub) => {
  const idx = date.getMonth();

  switch (sub) {
    case SUB.EN:      return `${MONTH_NAME[idx]}`;        // `Month`
    case SUB.RU:      return `${MONTH_NAME_RU[idx]}`;
    case SUB.RU_DECL: return `${MONTH_NAME_RU_DEC[idx]}`;

    default: return `` 
  }
}
