import { isEmpty } from '../base/validators.js';
import TPL from '../../../templates/errors/template-errors.js';

// Выбранные даты для посчёта статистик
export default function validSelectedDates(data) {
  let errors = {};

  if (isEmpty(data.from)) errors.dateFrom = TPL.statictics.dateIsNotBeEmpty;
  if (isEmpty(data.to))   errors.dateTo   = TPL.statictics.dateIsNotBeEmpty;
    
  // Проверка чтобы To > From
  if (data.from > data.to) errors.dateFrom = TPL.statictics.dateFromNotBeGreater;
  

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
}