import { DB_NAME } from '../db.js';
import F from '../fields.js';


/**
 * Возвращает объект с индексами столбцов (в принятом массиве из Гугл) нужных данных
 * 
 * @param {string} nameDB DB_NAME
 * @param {object} ids индексы столбцов сохранённые по названию колонок
 * @returns 
 */
export default function getFieldsWithIds(nameDB, ids) {
  let objIdx = {};

  switch (nameDB) {
    case DB_NAME.CssDB:
      objIdx.dateReg   = ids[F.CssDB.dateReg];
      objIdx.dateEnd   = ids[F.CssDB.dateEnd];
      objIdx.personReg = ids[F.CssDB.personReg];
      objIdx.personEnd = ids[F.CssDB.personEnd];
      objIdx.status    = ids[F.CssDB.status];
      objIdx.ballsTD   = ids[F.CssDB.ballsTD];
      objIdx.balls     = ids[F.CssDB.balls];
      break;
      

    case DB_NAME.CssInstDB:
      objIdx.dateReg   = ids[F.CssInstDB.dateReg];
      objIdx.dateEnd   = ids[F.CssInstDB.dateEnd];
      objIdx.personReg = ids[F.CssInstDB.personReg];
      objIdx.personEnd = ids[F.CssInstDB.personEnd];
      objIdx.status    = ids[F.CssInstDB.status];
      objIdx.balls     = ids[F.CssInstDB.balls];
      break;
      
    
    case DB_NAME.CssExpDB:
      objIdx.dateEnd   = ids[F.CssExpDB.dateEnd];
      objIdx.personEnd = ids[F.CssExpDB.personEnd];
      objIdx.status    = ids[F.CssExpDB.status];
      objIdx.balls     = ids[F.CssExpDB.balls];
      break;

    
    case DB_NAME.BadcomDB:
      objIdx.dateReg   = ids[F.BadcomDB.dateReg];
      objIdx.dateEnd   = ids[F.BadcomDB.dateEnd];
      objIdx.personReg = ids[F.BadcomDB.personReg];
      objIdx.personEnd = ids[F.BadcomDB.personEnd];
      objIdx.status    = ids[F.BadcomDB.status];
      objIdx.ballsTD   = ids[F.BadcomDB.ballsTD];
      objIdx.balls     = ids[F.BadcomDB.balls];
      break;
  }

  return objIdx;
};