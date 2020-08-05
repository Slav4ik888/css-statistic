import {getFromGoogleData} from './scripts/get-from-google-data.js';
import {createPersonNames, delDublePersons} from './scripts/persons.js';
import {createResultArr} from './scripts/create-result-arr.js';
import {calcNumberOf, calcValueOf, calcResultBalls, calcResultTD} from './scripts/calculates.js';
import {renderReaultTableTr, renderReaultTableHead, renderReaultTableEmptyTr, renderReaultTableTechDir} from './scripts/render-table.js';
import {filtredBetweenDatesReg, filtredBetweenDatesEnd} from './scripts/filters.js';
import {createParseDB} from './scripts/create-DB-parse-empty.js';
import {DB_NAME} from './scripts/consts.js';


const URL_G_CSS = `https://script.google.com/macros/s/AKfycbzOgGruy924eOim0YPS7I4VruiRWzKQhNvFh45o3kar1XBdLdo/exec`;
const URL_G_BADCOM = `https://script.google.com/macros/s/AKfycbyjZjLgAKkUcjltvH2x6CuOVCMtZ6gF3L5v7DQJmnEM5K00yqg/exec`;

const startDate = document.querySelector(`.start-date`);
const endDate = document.querySelector(`.end-date`);
const buttonStart = document.querySelector(`.button-start`);
// const buttonLoadDb = document.querySelector(`.button-load-db`);
// const buttonLoadLocal = document.querySelector(`.button-load-local`);
const tableView = document.querySelector(`.table-container`);
const modalLoad = document.querySelector(`.modal__item`);
const modalDescription = document.querySelector(`.modal__description`);



const loaderStart = text => {
  modalLoad.classList.add(`modal`);
  modalLoad.classList.remove(`hide`);
  modalDescription.textContent = text;
};

const loaderStop = () => {
  modalLoad.classList.add(`hide`);
  modalLoad.classList.remove(`modal`);
  modalDescription.textContent = ``;
}



// Массивы для работы
let CssDB = [];
let CssInstDB = [];
let CssExpDB = [];
let BadcomDB = [];

let persons = [];  // Все участники

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



// Сохранить в localStorage
const saveDB = (strAddress, bd) => localStorage.setItem(strAddress, JSON.stringify(bd));


// Читаем данные из Гугл CSS и сохраняем в LocalStorage
async function getDataFromGoogleCSS(url) {
  loaderStart(`Загружаем CSS...`);
  const DB = await getFromGoogleData(url);
  loaderStop();
  console.log(`Получили данные CSS`, DB);

  CssDB = Array.from(DB.data1);
  saveDB(DB_NAME.CssDB, CssDB);
  console.log('CssDB: ', CssDB);

  CssInstDB = Array.from(DB.data3)
  saveDB(DB_NAME.CssInstDB, CssInstDB);
  console.log('CssInstDB: ', CssInstDB);

  CssExpDB = Array.from(DB.data2);
  saveDB(DB_NAME.CssExpDB, CssExpDB);
  console.log('CssExpDB: ', CssExpDB);
};

// Читаем данные из Гугл BADCOM и сохраняем в LocalStorage
async function getDataFromGoogleBadcom(url) {
  loaderStart(`Загружаем BC...`);
  const DB = await getFromGoogleData(url);
  loaderStop();

  console.log(`Получили данные BC`, DB);

  BadcomDB = Array.from(DB.data1);
  saveDB(DB_NAME.BadcomDB, BadcomDB);
  console.log('BadcomDB: ', BadcomDB);

};

// Читаем данные из LocalStorage
const getDataFromLocalStorage = () => {
  const lsCssDB = localStorage.getItem(DB_NAME.CssDB);
  const lsCssInstDB = localStorage.getItem(DB_NAME.CssInstDB);
  const lsCssExpDB = localStorage.getItem(DB_NAME.CssExpDB);
  const lsBadcomDB = localStorage.getItem(DB_NAME.BadcomDB);

  lsCssDB ? CssDB = JSON.parse(lsCssDB) : CssDB = [];
  lsCssInstDB ? CssInstDB = JSON.parse(lsCssInstDB) : CssInstDB = [];
  lsCssExpDB ? CssExpDB = JSON.parse(lsCssExpDB) : CssExpDB = [];
  lsBadcomDB ? BadcomDB = JSON.parse(lsBadcomDB) : BadcomDB = [];

  // console.log(`From LS ${DB_NAME.CssDB} `, CssDB);
  // console.log(`From LS ${DB_NAME.CssInstDB} `, CssInstDB);
  // console.log(`From LS ${DB_NAME.CssExpDB} `, CssExpDB);
};



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
//   getDataFromGoogleCSS(URL_G_CSS);
//   getDataFromGoogleBadcom(URL_G_BADCOM);
// });

// buttonLoadLocal.addEventListener(`click`, () => {
//   getDataFromLocalStorage();
// });


// 3
// Ожидаем получение данных промежутка дат
buttonStart.addEventListener(`click`, () => {
  console.log(`СТАРТ расчёта`);
  tableView.classList.remove(`hide`);

  const start = startDate.value;
  const end = endDate.value;


  // 5. Загружаем данные из Гугл
  getDataFromGoogleCSS(URL_G_CSS)
  .then(() => getDataFromGoogleBadcom(URL_G_BADCOM))
  .then(() => { 
    // getDataFromLocalStorage();

    // 10
    // Создаём массивы из массива Гугла с объектами нужного формата но 0 значениями
    
    CssDB = createParseDB(CssDB, DB_NAME.CssDB);
    CssInstDB = createParseDB(CssInstDB, DB_NAME.CssInstDB);
    CssExpDB = createParseDB(CssExpDB, DB_NAME.CssExpDB);
    BadcomDB = createParseDB(BadcomDB, DB_NAME.BadcomDB);


    // 20
    // Создаём массив уникальных Person
    persons = [...createPersonNames(CssDB), ...createPersonNames(CssInstDB), ...createPersonNames(CssExpDB), ...createPersonNames(BadcomDB)];
    // Удалим дубликаты имён
    persons = delDublePersons(persons);
    console.log('persons-with-del: ', persons);

    // 40
    // Создаём массив в промежутке по нужному столбцу (Зарегистрированные, Завершённые)

    CssDBFiltredBetweenDatesReg = filtredBetweenDatesReg(CssDB, start, end);
    CssDBFiltredBetweenDatesEnd = filtredBetweenDatesEnd(CssDB, start, end);

    CssInstDBFiltredBetweenDatesReg = filtredBetweenDatesReg(CssInstDB, start, end);
    CssInstDBFiltredBetweenDatesEnd = filtredBetweenDatesEnd(CssInstDB, start, end);

    CssExpDBFiltredBetweenDatesEnd = filtredBetweenDatesEnd(CssExpDB, start, end);

    BadcomDBFiltredBetweenDatesReg = filtredBetweenDatesReg(BadcomDB, start, end);
    BadcomDBFiltredBetweenDatesEnd = filtredBetweenDatesEnd(BadcomDB, start, end);

    // 50.
    // Создаём массив по кол-ву Person, для наполнения
    const {ResultArr, objIndex} = createResultArr(persons);
    // console.log('objIndex: ', objIndex);
    console.log('Итоговая шаблон: ', ResultArr);


    // СОЗДАЁМ HEAD ИТОГОВОЙ ТАБЛИЦЫ
    renderReaultTableHead();

    // 60. Считаем данные по каждому Person и каждому значению
    
    
    persons.forEach(person => {
      console.log('person: ', person);
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

    // Считаем баллы ТД и выводим в таблицее
    renderReaultTableEmptyTr();

    renderReaultTableTechDir(calcResultTD(CssDBFiltredBetweenDatesEnd), calcResultTD(BadcomDBFiltredBetweenDatesEnd));

    console.log('Итоговая завершённая: ', ResultArr);
  }); // <-- конец then
});
