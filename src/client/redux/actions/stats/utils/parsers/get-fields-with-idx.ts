import { DB_Name, DbItem } from '../../../../../../types/index';
import F from '../../../../../consts/stats/fields';


/**
 * Возвращает объект с индексами столбцов (в принятом массиве из Гугл) нужных данных
 * 
 * @param {string} nameDB DB_Name
 * @param {object} ids индексы столбцов сохранённые по названию колонок
 * @returns 
 */
export default function getFieldsWithIds(nameDB: DB_Name, ids: object) {
  let objIdx: DbItem = {} as DbItem;

  switch (nameDB) {
    case DB_Name.CssDB:
      objIdx.dateReg     = ids[F[DB_Name.CssDB].dateReg];
      objIdx.dateEnd     = ids[F[DB_Name.CssDB].dateEnd];
      objIdx.personReg   = ids[F[DB_Name.CssDB].personReg];
      objIdx.personEnd   = ids[F[DB_Name.CssDB].personEnd];
      objIdx.status      = ids[F[DB_Name.CssDB].status];
      objIdx.ballsTD     = ids[F[DB_Name.CssDB].ballsTD];
      objIdx.balls       = ids[F[DB_Name.CssDB].balls];
      break;
      

    case DB_Name.CssInstDB:
      objIdx.dateReg     = ids[F[DB_Name.CssInstDB].dateReg];
      objIdx.dateEnd     = ids[F[DB_Name.CssInstDB].dateEnd];
      objIdx.personReg   = ids[F[DB_Name.CssInstDB].personReg];
      objIdx.personEnd   = ids[F[DB_Name.CssInstDB].personEnd];
      objIdx.status      = ids[F[DB_Name.CssInstDB].status];
      objIdx.balls       = ids[F[DB_Name.CssInstDB].balls];
      objIdx.typeClient  = ids[F[DB_Name.CssInstDB].typeClient];
      objIdx.typeInstall = ids[F[DB_Name.CssInstDB].typeInstall];
      objIdx.range       = ids[F[DB_Name.CssInstDB].range];
      break;
      
    
    case DB_Name.CssExpDB:
      objIdx.dateEnd     = ids[F[DB_Name.CssExpDB].dateEnd];
      objIdx.personEnd   = ids[F[DB_Name.CssExpDB].personEnd];
      objIdx.status      = ids[F[DB_Name.CssExpDB].status];
      objIdx.balls       = ids[F[DB_Name.CssExpDB].balls];
      break;

    
    case DB_Name.BadcomDB:
      objIdx.dateReg     = ids[F[DB_Name.BadcomDB].dateReg];
      objIdx.dateEnd     = ids[F[DB_Name.BadcomDB].dateEnd];
      objIdx.personReg   = ids[F[DB_Name.BadcomDB].personReg];
      objIdx.personEnd   = ids[F[DB_Name.BadcomDB].personEnd];
      objIdx.status      = ids[F[DB_Name.BadcomDB].status];
      objIdx.ballsTD     = ids[F[DB_Name.BadcomDB].ballsTD];
      objIdx.balls       = ids[F[DB_Name.BadcomDB].balls];
      break;
  }

  return objIdx;
};