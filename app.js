import { getPersons } from './scripts/persons.js';
import { createResultArr } from './scripts/create-result-arr.js';
import { calcNumberOf, calcValueOf, calcResultBalls, calcResultTD, calcResultIncInWork } from './scripts/calculates.js';
import {
  renderReaultTableTr, renderReaultTableHead, renderReaultTableEmptyTr,
  renderReaultTableTechDir, renderReaultTableAllCountsTech, renderReaultTableIncInWork
} from './scripts/render-table.js';
import { filtredBetweenDatesReg, filtredBetweenDatesEnd, filtredBeforDate } from './scripts/filters.js';
// Error
import { showError } from './scripts/errors/show-error.js';
// Data
import { getCSSData, getBadcomData } from './scripts/data/google/get-company-data-from-google.js';
import { getAllDBFromLocalStorage } from './scripts/data/local-storage/get-all-db-from-local-storage.js';
import { isMaxFrequencyEnd } from './scripts/date/date.js';
// Parsers
import { parseDbByFields } from './scripts/parsers/parse-db-by-fields.js';
import getParsedData from './scripts/parsers/get-parsed-data.js';
// Consts
import { DB } from './scripts/db.js';
// Config
import cfg from './config.js';
const isDev = cfg.isDev;
const isProd = !isDev;


const startDate = document.querySelector(`.start-date`);
const endDate = document.querySelector(`.end-date`);
const buttonStart = document.querySelector(`.button-start`);
// const buttonLoadDb = document.querySelector(`.button-load-db`);
// const buttonLoadLocal = document.querySelector(`.button-load-local`);
const tableView = document.querySelector(`.table-container`);
const leftContainer = document.querySelector(`.left-container`);
const refreshIcon = document.querySelector(`.refresh-icon`);

// Фиксируем время запроса данных
let lastRequestTime;


let persons   = []; // Список всех участников

// Массивы из заданного промежутка дат по Регистр и Завершению инцидентов
let CssDBFiltredBetweenDatesReg = [];
let CssDBFiltredBetweenDatesEnd = [];

let CssInstDBFiltredBetweenDatesReg = [];
let CssInstDBFiltredBetweenDatesEnd = [];

let CssExpDBFiltredBetweenDatesEnd = [];

let BadcomDBFiltredBetweenDatesReg = [];
let BadcomDBFiltredBetweenDatesEnd = [];

// Итоговый массив
// ResultArr, в него сразу добавляется шаблон




// АЛГОРИТМ
// 3. Ожидаем получение данных промежутка дат
// 5. Загружаем данные из Гугл
// 10. Создаём нужный массив из массива Гугл
// 20. Создаём массив всех Person
// 40. Создаём массив в промежутке по нужному столбцу (Зарегистрированные, Завершённые)
// 50. Создаём массив по кол-ву Person, для наполнения
// 60. Считаем данные по каждому
//




/**************************************/
/*            СЛУШАТЕЛИ               */
/**************************************/

// buttonLoadDb.addEventListener(`click`, () => {
//   getCSSData(URL_G_CSS, DB);
//   getBadcomData(URL_G_BADCOM, DB);
// });

// buttonLoadLocal.addEventListener(`click`, () => {
//   getAllDBFromLocalStorage(DB);
// });

refreshIcon.addEventListener(`click`, () => {
  tableView.classList.add(`hide`);
  leftContainer.classList.remove(`hide`);
});


// 3
// Ожидаем получение данных промежутка дат
buttonStart.addEventListener(`click`, async () => {
  
  // 5. Загружаем данные
  // из Гугл
  if (!isMaxFrequencyEnd(lastRequestTime)) return showError(`Не вышло время`);

  if (isProd) {
    await getCSSData(DB);
    await getBadcomData(DB);
  }
  else getAllDBFromLocalStorage(DB);

  lastRequestTime = new Date();

  leftContainer.classList.add(`hide`);
  tableView.classList.remove(`hide`);

  const dateStart = isProd ? startDate.value : cfg.startDate;
  const dateEnd = isProd ? endDate.value : cfg.endDate;


  // 10
  // Создаём массивы из массива Гугла с объектами нужного формата но 0 значениями
  getParsedData(DB);


  // DB.CssDB     = parseDbByFields(DB.CssDB, DB_NAME.CssDB);
  // DB.CssInstDB = parseDbByFields(DB.CssInstDB, DB_NAME.CssInstDB);
  // DB.CssExpDB  = parseDbByFields(DB.CssExpDB, DB_NAME.CssExpDB);
  // DB.BadcomDB  = parseDbByFields(DB.BadcomDB, DB_NAME.BadcomDB);

  // 20
  // Создаём массив уникальных Person
  persons = getPersons(DB);

    // 40
    // Создаём массив в промежутке по нужному столбцу (Зарегистрированные, Завершённые)

    CssDBFiltredBetweenDatesReg = filtredBetweenDatesReg(DB.CssDB, dateStart, dateEnd);
    CssDBFiltredBetweenDatesEnd = filtredBetweenDatesEnd(DB.CssDB, dateStart, dateEnd);

    CssInstDBFiltredBetweenDatesReg = filtredBetweenDatesReg(DB.CssInstDB, dateStart, dateEnd);
    CssInstDBFiltredBetweenDatesEnd = filtredBetweenDatesEnd(DB.CssInstDB, dateStart, dateEnd);

    CssExpDBFiltredBetweenDatesEnd = filtredBetweenDatesEnd(DB.CssExpDB, dateStart, dateEnd);

    BadcomDBFiltredBetweenDatesReg = filtredBetweenDatesReg(DB.BadcomDB, dateStart, dateEnd);
    BadcomDBFiltredBetweenDatesEnd = filtredBetweenDatesEnd(DB.BadcomDB, dateStart, dateEnd);

    // 50.
    // Создаём массив по кол-ву Person, для наполнения
    const {ResultArr, objIndex} = createResultArr(persons);
    // console.log('objIndex: ', objIndex);
    // console.log('Итоговая шаблон: ', ResultArr);


    // СОЗДАЁМ HEAD ИТОГОВОЙ ТАБЛИЦЫ
    renderReaultTableHead();

    // 60. Считаем данные по каждому Person и каждому значению
    
    
    persons.forEach(person => {
      // console.log('person: ', person);

      // СЕКЦИЯ ТЕХПОДДЕРЖКИ
      // КОЛ-ВО принятых и оформленных инцидентов
      ResultArr[objIndex[person]].numberSupportReg = calcNumberOf(CssDBFiltredBetweenDatesReg, `personReg`, person);

      // БАЛЛЫ за завершённые инциденты
      ResultArr[objIndex[person]].valueSupportForEnd = calcValueOf(CssDBFiltredBetweenDatesEnd, `personEnd`, person);

      // СЕКЦИЯ ИНСТАЛЛЯЦИЙ
      // КОЛ-ВО принятых и оформленных инцидентов
      ResultArr[objIndex[person]].numberInstallReg = calcNumberOf(CssInstDBFiltredBetweenDatesReg, `personReg`, person);

      // БАЛЛЫ за завершённые инциденты
      ResultArr[objIndex[person]].valueInstallForEnd = calcValueOf(CssInstDBFiltredBetweenDatesEnd, `personEnd`, person);

      // СЕКЦИЯ ОПЫТНОГО ПРОИЗВОДСТВА
      // БАЛЛЫ за завершённые задачи
      ResultArr[objIndex[person]].valueExperiencesForEnd = calcValueOf(CssExpDBFiltredBetweenDatesEnd, `personEnd`, person);

      // BADCOM
      // КОЛ-ВО принятых и оформленных инцидентов
      ResultArr[objIndex[person]].numberBadcomReg = calcNumberOf(BadcomDBFiltredBetweenDatesReg, `personReg`, person);
      
      // БАЛЛЫ за завершённые инциденты
      ResultArr[objIndex[person]].valueBadcomForEnd = calcValueOf(BadcomDBFiltredBetweenDatesEnd, `personEnd`, person);

      // СЧИТАЕМ ИТОГО
      ResultArr[objIndex[person]].result = calcResultBalls(ResultArr[objIndex[person]]);

      // СОЗДАЁМ TR ИТОГОВОЙ ТАБЛИЦЫ
      renderReaultTableTr(ResultArr[objIndex[person]]);
    });

    // Кол-во завершённых инцидентов всего
    // Кол-во инсталляций 
    renderReaultTableEmptyTr();
    renderReaultTableAllCountsTech(
      CssDBFiltredBetweenDatesEnd.length + BadcomDBFiltredBetweenDatesEnd.length, CssInstDBFiltredBetweenDatesEnd.length 
      );
    
    // Кол-во инцидентов находящихся в работе (отриц.) (Горбунов)
    renderReaultTableEmptyTr();
    renderReaultTableIncInWork(calcResultIncInWork(filtredBeforDate(DB.CssDB, dateEnd), filtredBeforDate(DB.BadcomDB, dateEnd)));


    // Считаем баллы ТД и выводим в таблицее
    renderReaultTableEmptyTr();
    renderReaultTableTechDir(calcResultTD(CssDBFiltredBetweenDatesEnd), calcResultTD(BadcomDBFiltredBetweenDatesEnd));

    // console.log('Итоговая завершённая: ', ResultArr);
  // }); // <-- конец then
});

// git add . && git commit -m "fix application" && git push origin master