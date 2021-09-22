import { renderResultTableTr, renderResultTableHead, renderResultTableEmptyTr, renderResultTableTechDir, renderResultTableAllCountsTech, renderResultTableIncInWork } from './render-table.js';
import { renderCostRenderedServices } from './render-cost-rendered-services.js';
import { openTable } from '../toggle-table.js';
import { COUNT } from '../../db.js';


/**
 * Выводит итоговую таблицу с результатами
 * @param {arr} persons 
 * @param {arr} resultArr 
 * @param {object} objIndex 
 */
export default function showFinishTable(persons, resultArr, objIndex) {
  openTable(); // Разворачиваем таблицу

  // СОЗДАЁМ HEAD ИТОГОВОЙ ТАБЛИЦЫ
  renderResultTableHead();

  // Создаём TR по подсчитанным баллам за инциденты
  persons.forEach(person => {
    renderResultTableTr(resultArr[objIndex[person]]);
  });


  // Кол-во завершённых инцидентов всего
  // Кол-во инсталляций 
  // renderResultTableEmptyTr();
  renderResultTableAllCountsTech(COUNT.incEnd, COUNT.inst);
    
  // Кол-во инцидентов находящихся в работе (отриц.) (Горбунов)
  // renderResultTableEmptyTr();
  renderResultTableIncInWork(COUNT.incInWork);

  // Стоимость оказанных услуг РПО
  // renderResultTableEmptyTr();
  renderCostRenderedServices(COUNT.costRenderedServices);

   
  // Баллы ТД и выводим в таблицее
  // renderResultTableEmptyTr();
  renderResultTableTechDir(COUNT.tdD, COUNT.tdB);
}