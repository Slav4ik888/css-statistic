import calcTD from './positions/calc-td.js';
import calcRPO from './positions/rpo/calc-rpo.js';


// Подсчёт индивидуальных статистик (ТД, РПО)
export default function calcIndividual(dateStart, dateEnd) {
  // Статистика РПО
  calcRPO(dateStart, dateEnd);

  // Считаем баллы ТД и выводим в таблицее
  calcTD();
}