import { filtredBetweenDatesReg, filtredBetweenDatesEnd } from '../filters.js';
import { DB } from '../db.js';




// Подсчёт всех значений
export default function calcData(dateStart, dateEnd) {
  // Создаём массив в промежутке по нужному столбцу (Зарегистрированные, Завершённые)
  DB.CssDB.calc.datesReg     = filtredBetweenDatesReg(DB.CssDB.db, dateStart, dateEnd);
  DB.CssDB.calc.datesEnd     = filtredBetweenDatesEnd(DB.CssDB.db, dateStart, dateEnd);

  DB.CssInstDB.calc.datesReg = filtredBetweenDatesReg(DB.CssInstDB.db, dateStart, dateEnd);
  DB.CssInstDB.calc.datesEnd = filtredBetweenDatesEnd(DB.CssInstDB.db, dateStart, dateEnd);

  DB.CssExpDB.calc.datesEnd  = filtredBetweenDatesEnd(DB.CssExpDB.db, dateStart, dateEnd);

  DB.BadcomDB.calc.datesReg  = filtredBetweenDatesReg(DB.BadcomDB.db, dateStart, dateEnd);
  DB.BadcomDB.calc.datesEnd  = filtredBetweenDatesEnd(DB.BadcomDB.db, dateStart, dateEnd);
};