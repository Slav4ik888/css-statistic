// Calculate
import calcAllResults from './calulates/index.js';
// Display
import showFinishTable from './display/finish-table/show-finish-table.js';
import { showError } from './display/errors/show-error.js';
import logger from './display/logger/logger.js';
const log = logger(`process-data`);
// Data
import { getCSSData, getBadcomData } from './data/google/get-company-data-from-google.js';
import { getAllDBFromLocalStorage } from './data/local-storage/get-all-db-from-local-storage.js';
import { isMaxFrequencyEnd } from './date/date.js';
// Consts
import { DB } from './db.js';
// Config
import cfg from '../config.js';
const isProd = cfg.isProd;

// Фиксируем время запроса данных
let lastRequestTime;

  

// Главная функция по обработке данных по выбранному промежутку
export default async function processData() {
  // Загружаем данные из Гугл
  if (!isMaxFrequencyEnd(lastRequestTime)) return showError({ label: `Не вышло время.`, descr: `Между запросами должно пройти больше 1 минуты` });

  if (isProd) {
    await getCSSData(DB);
    await getBadcomData(DB);
  }
  else getAllDBFromLocalStorage(DB);
  log(`DB: `, DB);

  lastRequestTime = new Date();

  // Подсчёт
  const { persons, ResultArr, objIndex } = calcAllResults();
  log('ResultArr: ', ResultArr);
  
  // Выпод результатов
  showFinishTable(persons, ResultArr, objIndex);
}