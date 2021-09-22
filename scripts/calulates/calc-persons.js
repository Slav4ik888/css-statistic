// Display
import logger from '../display/logger/logger.js';
const log = logger(`calc-person`);
// Calculate
import { calcNumberOf, calcValueOf, calcResultBalls } from './calculates.js';
// Consts
import { DB } from '../db.js';


// Считаем данные по каждому Person и каждому значению
export default function calcPerson(persons, ResultArr, objIndex) {
  persons.forEach(person => {
    // console.log('person: ', person);

    // СЕКЦИЯ ТЕХПОДДЕРЖКИ
    // КОЛ-ВО принятых и оформленных инцидентов
    ResultArr[objIndex[person]].numberSupportReg = calcNumberOf(DB.CssDB.calc.datesReg, `personReg`, person);

    // БАЛЛЫ за завершённые инциденты
    ResultArr[objIndex[person]].valueSupportForEnd = calcValueOf(DB.CssDB.calc.datesEnd, `personEnd`, person);

    // СЕКЦИЯ ИНСТАЛЛЯЦИЙ
    // КОЛ-ВО принятых и оформленных инцидентов
    ResultArr[objIndex[person]].numberInstallReg = calcNumberOf(DB.CssInstDB.calc.datesReg, `personReg`, person);
    log('DB.CssInstDB.calc: ', DB.CssInstDB.calc);

    // БАЛЛЫ за завершённые инциденты
    ResultArr[objIndex[person]].valueInstallForEnd = calcValueOf(DB.CssInstDB.calc.datesEnd, `personEnd`, person);

    // СЕКЦИЯ ОПЫТНОГО ПРОИЗВОДСТВА
    // БАЛЛЫ за завершённые задачи
    ResultArr[objIndex[person]].valueExperiencesForEnd = calcValueOf(DB.CssExpDB.calc.datesEnd, `personEnd`, person);

    // BADCOM
    // КОЛ-ВО принятых и оформленных инцидентов
    ResultArr[objIndex[person]].numberBadcomReg = calcNumberOf(DB.BadcomDB.calc.datesReg, `personReg`, person);
    
    // БАЛЛЫ за завершённые инциденты
    ResultArr[objIndex[person]].valueBadcomForEnd = calcValueOf(DB.BadcomDB.calc.datesEnd, `personEnd`, person);

    // СЧИТАЕМ ИТОГО
    ResultArr[objIndex[person]].result = calcResultBalls(ResultArr[objIndex[person]]);
  });
};