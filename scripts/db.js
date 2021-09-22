// имена для массивов DB для localStorage и прочего
export const DB_NAME = {
  CssDB: `Stat-CssDB`,
  CssInstDB: `Stat-CssInstDB`,
  CssExpDB: `Stat-CssExpDB`,
  BadcomDB: `Stat-BadcomDB`,
};


// Для загруженных массивов (из гугл) разделённых на группы
export const DB = {
  CssDB: { // ДТ - Инциденты
    db: [],
    calc: {
      datesReg: [],
      datesEnd: [],
    }
  },
  CssInstDB: { // ДТ - Инсталляции
    db: [],
    calc: {
      datesReg: [],
      datesEnd: [],
    }
  },
  CssExpDB: { // ДТ - Опытное пр-во
    db: [],
    calc: {
      datesEnd: [],
    }
  },
  BadcomDB: { // Badcom
    db: [],
    calc: {
      datesReg: [],
      datesEnd: [],
    }
  }
};


// Счётчик итоговых значений
export const COUNT = {
  incEnd               : null, // Кол-во завершённых инцидентов всего
  inst                 : null, // Кол-во инсталляций
  incInWork            : null, // Кол-во инцидентов находящихся в работе (отриц.) (Горбунов)
  costRenderedServices : null, // Стоимость оказанных услуг

  tdD                  : null, // ТД Да
  tdB                  : null, // ТД Badcom
};


