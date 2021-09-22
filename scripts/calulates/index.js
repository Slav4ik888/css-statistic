// Parsers
import parsedData from '../parsers/parsed-data.js';
// Calculates
import calcData from './calc-data.js';
import calcIndividual from './calc-individual.js';
import calcIncidents from './calc-incidents.js';
// Consts
import { DB } from '../db.js';
// Config
import cfg from '../../config.js';
const isProd = cfg.isProd;


const startDate = document.querySelector(`.start-date`);
const endDate = document.querySelector(`.end-date`);


// Подсчёт всего
export default function () {
  const dateStart = isProd ? startDate.value : cfg.startDate;
  const dateEnd = isProd ? endDate.value : cfg.endDate;

  // Создаём массивы из массива Гугла с объектами нужного формата но 0 значениями
  parsedData(DB);

  // Подсчёт всех значений
  calcData(dateStart, dateEnd);

  // Подсчёт индивидуальных статистик (ТД, РПО)
  calcIndividual(dateStart, dateEnd);

  // Подсчёт индивидуальных статистик по завершённым инцидентам
  const { persons, ResultArr, objIndex } = calcIncidents();

  return { persons, ResultArr, objIndex };
}