import { isEmpty } from '../base/validators.js';
import TPL from '../../../templates/errors/template-errors.js';

// Валидация при создании новой недели
export default function validWeekNumberData(data) {
  let errors = {};

  if (isEmpty(data)) errors.weekNumber = TPL.week.weekNumberNotBeEmpty;
  if (data?.length > 2) errors.weekNumber = TPL.week.weekNumberMoreMaxLength;


  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
}