import {DB_NAME} from './consts.js';

// Создаём массивы из массива Гугла с объектами нужного формата но 0 значениями

// Возвращает объект с индексами столбцов (в принятом массиве из Гугл) нужных данных
const getObjIdx = nameDB =>  {
  let objIdx = {
    dateReg: null,
    dateEnd:  null,
    personReg:  null,
    personEnd:  null,
    status:  null,
    ballsTD:  null,
    balls:  null,
  };

  switch (nameDB) {
    case DB_NAME.CssDB:
      objIdx.dateReg = 1;
      objIdx.dateEnd = 5;
      objIdx.personReg = 2;
      objIdx.personEnd = 6;
      objIdx.status = 4;
      objIdx.ballsTD = 17;
      objIdx.balls = 20;
      return objIdx;

    case DB_NAME.CssInstDB:
      objIdx.dateReg = 1;
      objIdx.dateEnd = 8;
      objIdx.personReg = 3;
      objIdx.personEnd = 10;
      objIdx.status = 7;
      objIdx.balls = 15;
      return objIdx;
      
    case DB_NAME.CssExpDB:
      objIdx.dateEnd = 5;
      objIdx.personEnd = 6;
      objIdx.status = 4;
      objIdx.balls = 13;
      return objIdx;

    case DB_NAME.BadcomDB:
      objIdx.dateReg = 1;
      objIdx.dateEnd = 5;
      objIdx.personReg = 2;
      objIdx.personEnd = 6;
      objIdx.status = 4;
      objIdx.ballsTD = 17;
      objIdx.balls = 20;
      return objIdx;

    default: {
      return objIdx;
    }
  }
};

export const createParseDB = (DB, nameDB) => {
  let arr = [];
  let obj = {};
  
  for(let item of DB) {
    obj.dateReg   = Date.parse(item[getObjIdx(nameDB).dateReg]);
    obj.dateEnd   = Date.parse(item[getObjIdx(nameDB).dateEnd]);
    obj.personReg = item[getObjIdx(nameDB).personReg];
    obj.personEnd = item[getObjIdx(nameDB).personEnd];
    obj.status    = item[getObjIdx(nameDB).status];
    obj.ballsTD   = item[getObjIdx(nameDB).ballsTD];
    obj.balls     = item[getObjIdx(nameDB).balls];

    arr.push(obj);
    obj = {};
  }
  arr.splice(0,1);
  console.log(`${nameDB}`, arr);

  return arr
};
