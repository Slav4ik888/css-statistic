import { createResultArr } from '../create-result-arr.js';
// Data
import { getPersons } from '../persons.js';
// Calculate
import calcPersons from './calc-persons.js';
// Consts
import { DB } from '../db.js';


// Подсчёт всех индивидуальных статистик
export default  function calcAllResults() {
    // Создаём массив уникальных Person
    let persons = getPersons(DB);
    
    // Создаём массив по кол-ву Person, для наполнения
    // ResultArr, в него сразу добавляется шаблон
    // Индекс сотрудника в таблице { Околелов: 0, }
    const { ResultArr, objIndex } = createResultArr(persons);
    // console.log('objIndex: ', objIndex); 
    // console.log('Итоговый шаблон: ', ResultArr);

    // Считаем данные по каждому Person и каждому значению
    calcPersons(persons, ResultArr, objIndex);

    return { persons, ResultArr, objIndex };
  }