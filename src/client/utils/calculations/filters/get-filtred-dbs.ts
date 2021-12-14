import { CalcDBsType, DBsType, IncidentType as Type } from '../../../../types';
import { filtredBetweenDates } from '.';



const getEmptyObject = () => ({
  cssDb: {
    datesReg: [],
    datesEnd: []
  },
  cssInstDb: {
    datesReg: [],
    datesEnd: []
  },
  cssExpDb: {
    datesReg: [],
    datesEnd: []
  },
  badcomDb: {
    datesReg: [],
    datesEnd: []
  }
});



// Подсчёт всех значений
export default function getFiltredDBs(DB: DBsType, _s: string, _e: string) {
  const filtred: CalcDBsType = getEmptyObject();
  
  // Создаём массив в промежутке по нужному столбцу (Зарегистрированные, Завершённые)
  filtred.cssDb.datesReg     = filtredBetweenDates(DB.cssDb,     _s, _e, Type.REG);
  filtred.cssDb.datesEnd     = filtredBetweenDates(DB.cssDb,     _s, _e, Type.END);

  filtred.cssInstDb.datesReg = filtredBetweenDates(DB.cssInstDb, _s, _e, Type.REG);
  filtred.cssInstDb.datesEnd = filtredBetweenDates(DB.cssInstDb, _s, _e, Type.END);

  filtred.cssExpDb.datesEnd  = filtredBetweenDates(DB.cssExpDb,  _s, _e, Type.END);

  filtred.badcomDb.datesReg  = filtredBetweenDates(DB.badcomDb,  _s, _e, Type.REG);
  filtred.badcomDb.datesEnd  = filtredBetweenDates(DB.badcomDb,  _s, _e, Type.END);

  return filtred
};