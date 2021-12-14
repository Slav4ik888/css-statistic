import { DB_Name } from '../../../types/index';


// Названия заголовков по которым будут искаться данные
export default {
  [DB_Name.CssDB]: { // ДА - Инциденты
    dateReg    : `Дата регистрации`,
    dateEnd    : `Дата завершения`,
    personReg  : `Инцидент принял`,
    personEnd  : `Cотрудник решающий/решивший запрос`,
    status     : `Текущий статус`,
    ballsTD    : `Баллы ТД`,
    balls      : `Баллы Техподд`,
  },
  [DB_Name.CssInstDB]: { // ДА - Инсталляции
    dateReg    : `Дата регистрации`,
    dateEnd    : `Дата завершения`,
    typeClient : `Тип абонента`,
    typeInstall: `Тип инсталляции`,
    range      : `Диапазон`,
    personReg  : `Инцидент принял`,
    personEnd  : `Cотрудник сопровождающий инсталляцию`,
    status     : `Текущий статус`,
    balls      : `Баллы`, 
  }, 
  [DB_Name.CssExpDB]: { // ДА - Опытное пр-во
    dateEnd    : `Дата завершения`,
    personEnd  : `Cотрудник решающий/решивший запрос`,
    status     : `Текущий статус`,
    balls      : `Баллы`,
  },  
  [DB_Name.BadcomDB]: { // Badcom
    dateReg    : `Дата регистрации`,
    dateEnd    : `Дата завершения`,
    personReg  : `Инцидент принял`,
    personEnd  : `Cотрудник решающий/решивший запрос`,
    status     : `Текущий статус`,
    ballsTD    : `Баллы ТД`,
    balls      : `Баллы Техподд`,
  }, 
};
