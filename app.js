import {getFromGoogleData} from './scripts/get-from-google-data.js';
import {createPersonNames, delDublePersons} from './scripts/persons.js';
import {createResultArr} from './scripts/create-result-arr.js';
import {calculateNumberOf, calculateValueOf} from './scripts/calculates.js';
import {renderReaultTableTr, renderReaultTableHead} from './scripts/render-table.js';
import {filtredBetweenDatesReg, filtredBetweenDatesEnd} from './scripts/filters.js';

 
const URL_G_CSS = `https://script.google.com/macros/s/AKfycbzOgGruy924eOim0YPS7I4VruiRWzKQhNvFh45o3kar1XBdLdo/exec`;


const startDate = document.querySelector(`.start-date`);
const endDate = document.querySelector(`.end-date`);
const buttonStart = document.querySelector(`.button-start`);
const buttonLoadDb = document.querySelector(`.button-load-db`);
const buttonLoadLocal = document.querySelector(`.button-load-local`);


// имена для сохранения в localStorage
const saveName = {
  CssDB: `CssDB`,
  CssInstDB: `CssInstDB`,
  CssExpDB: `CssExpDB`,
  badcom: `badcom`,
};


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


// Читаем данные из Гугл и сохраняем в LocalStorage
async function getDataFromGoogleCSS(url) {
  console.log(`Загружаем`);
  const DB = await getFromGoogleData(url);

  console.log(`Получили данные`, DB);

  CssDB = Array.from(DB.data1);
  saveDB(saveName.CssDB, CssDB);
  console.log('CssDB: ', CssDB);

  CssInstDB = Array.from(DB.data3)
  saveDB(saveName.CssInstDB, CssInstDB);
  console.log('CssInstDB: ', CssInstDB);

  CssExpDB = Array.from(DB.data2);
  saveDB(saveName.CssExpDB, CssExpDB);
  console.log('CssExpDB: ', CssExpDB);
};


// Проверяем если пустой, загружаем
const checkIsEmpty = (db, url) => {
  if (!db.length) {
    getDataFromGoogle(url);
  }
};


// АЛГОРИТМ
// 5.  Загружаем данные из Гугл
// 10. Создаём нужный массив из массива Гугл
// 20. Создаём массив всех Person
// 30. Ожидаем получение данных промежутка дат
// 40. Создаём массив в промежутке по нужному столбцу (Зарегистрированные, Завершённые)
// 50. Создаём массив по кол-ву Person, для наполнения
// 60. Считаем данные по каждому
//

// Создаём нужный массив из массива Гугл
const CssDBParse = () => {
  let arr = [];
  let obj = {};

  for(let item of CssDB) {
    obj.dateReg = Date.parse(item[1]);
    obj.dateEnd = Date.parse(item[5]);
    obj.personReg = item[2];
    obj.personEnd = item[6];
    obj.status = item[4];
    obj.ballsTD = item[17];
    obj.balls = item[20];

    arr.push(obj);
    obj = {};
  }
  arr.splice(0,1);
  console.log('parseCssDB: ', arr);

  return arr
};

const CssInstDBParse = () => {
  let arr = [];
  let obj = {};

  for(let item of CssInstDB) {
    obj.dateReg = Date.parse(item[1]);
    obj.dateEnd = Date.parse(item[8]);
    obj.personReg = item[3];
    obj.personEnd = item[10];
    obj.status = item[7];
    obj.balls = item[15];

    arr.push(obj);
    obj = {};
  }
  arr.splice(0,1);
  console.log('parseCssDB: ', arr);

  return arr
};

const CssExpDBParse = () => {
  let arr = [];
  let obj = {};

  for(let item of CssExpDB) {
    obj.dateEnd = Date.parse(item[5]);
    obj.personEnd = item[6];
    obj.status = item[4];
    obj.balls = item[13];

    arr.push(obj);
    obj = {};
  }
  arr.splice(0,1);
  console.log('parseCssDB: ', arr);

  return arr
};


/**************************************/
/*            СЛУШАТЕЛИ               */
/**************************************/

buttonLoadDb.addEventListener(`click`, () => {
  getDataFromGoogleCSS(URL_G_CSS);
  
});


buttonLoadLocal.addEventListener(`click`, () => {
  const lsCssDB = localStorage.getItem(saveName.CssDB);
  const lsCssInstDB = localStorage.getItem(saveName.CssInstDB);
  const lsCssExpDB = localStorage.getItem(saveName.CssExpDB);

  lsCssDB ? CssDB = JSON.parse(lsCssDB) : CssDB = [];
  lsCssInstDB ? CssInstDB = JSON.parse(lsCssInstDB) : CssInstDB = [];
  lsCssExpDB ? CssExpDB = JSON.parse(lsCssExpDB) : CssExpDB = [];

  // console.log('From localStorage ', CssDB);
  // console.log('From localStorage ', CssInstDB);
  // console.log('From localStorage ', CssExpDB);
});


// 30
// Ожидаем получение данных промежутка дат
buttonStart.addEventListener(`click`, () => {
  const start = startDate.value;
  const end = endDate.value;

  // 10
  // Создаём "нужный" массив из массива Гугл

  CssDB = CssDBParse();
  CssInstDB = CssInstDBParse();
  CssExpDB = CssExpDBParse();

  // 20
  // Создаём массив уникальных Person
  persons = [...createPersonNames(CssDB), ...createPersonNames(CssInstDB), ...createPersonNames(CssExpDB), ...createPersonNames(BadcomDB)];
  // Удалим дубликаты имён
  persons = delDublePersons(persons);
  // console.log('personsDEL: ', persons);

  // 40
  // Создаём массив в промежутке по нужному столбцу (Зарегистрированные, Завершённые)

  CssDBFiltredBetweenDatesReg = filtredBetweenDatesReg(CssDB, start, end);
  CssDBFiltredBetweenDatesEnd = filtredBetweenDatesEnd(CssDB, start, end);

  CssInstDBFiltredBetweenDatesReg = filtredBetweenDatesEnd(CssInstDB, start, end);
  CssInstDBFiltredBetweenDatesEnd = filtredBetweenDatesEnd(CssInstDB, start, end);

  CssExpDBFiltredBetweenDatesEnd = filtredBetweenDatesEnd(CssExpDB, start, end);

  BadcomDBFiltredBetweenDatesReg = filtredBetweenDatesEnd(BadcomDB, start, end);
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
    // СЕКЦИЯ ТЕХПОДДЕРЖКИ
    // КОЛ-ВО принятых и оформленных инцидентов
    ResultArr[objIndex[person]].numberSupportReg = calculateNumberOf(CssDBFiltredBetweenDatesReg, `personReg`, person);

    // БАЛЛЫ за завершённые инциденты
    ResultArr[objIndex[person]].valueSupportForEnd = calculateValueOf(CssDBFiltredBetweenDatesEnd, `personEnd`, person);

    // СЕКЦИЯ ИНСТАЛЛЯЦИЙ
    // КОЛ-ВО принятых и оформленных инцидентов
    ResultArr[objIndex[person]].numberInstallReg = calculateNumberOf(CssInstDBFiltredBetweenDatesReg, `personReg`, person);

    // БАЛЛЫ за завершённые инциденты
    ResultArr[objIndex[person]].valueInstallForEnd = calculateValueOf(CssInstDBFiltredBetweenDatesEnd, `personEnd`, person);

    // СЕКЦИЯ ОПЫТНОГО ПРОИЗВОДСТВА
    // БАЛЛЫ за завершённые задачи
    ResultArr[objIndex[person]].valueExperiencesForEnd = calculateValueOf(CssDBFiltredBetweenDatesEnd, `personEnd`, person);

    // BADCOM
    // КОЛ-ВО принятых и оформленных инцидентов
    // numberBadcomReg 
    
    // БАЛЛЫ за завершённые инциденты
    // valueBadcomForEnd: 0,
    

  


    // СОЗДАЁМ TR ИТОГОВОЙ ТАБЛИЦЫ
    renderReaultTableTr(ResultArr[objIndex[person]]);
  });
  console.log(ResultArr);
});
