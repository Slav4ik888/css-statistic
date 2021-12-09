import { isEmpty, isNoValidMaxL30, isNoValidMaxL300 } from '../base/validators.js';
import TPL from '../../../templates/errors/template-errors.js';


// Валидация при создании Водителя
export default function validDriverData(data) {
  let errors = {};

  // Проверка Id
  if (isEmpty(data.id)) errors.id = TPL.auth.idIsNotBeEmpty;
    
  // Проверка Person
  if (isEmpty(data.person.firstName)) errors.firstName = TPL.auth.firstNameIsNotBeEmpty;
  if (isNoValidMaxL30(data.person.firstName)) errors.firstName = TPL.auth.nameMoreMaxLength;
  if (isEmpty(data.person.secondName)) errors.secondName = TPL.auth.secondNameIsNotBeEmpty;
  if (isNoValidMaxL30(data.person.secondName)) errors.secondName = TPL.auth.nameMoreMaxLength;
  if (isEmpty(data.person.middleName)) errors.middleName = TPL.auth.middleNameIsNotBeEmpty;
  if (isNoValidMaxL30(data.person.middleName)) errors.middleName = TPL.auth.nameMoreMaxLength;

  // Проверка position
  if (isNoValidMaxL30(data.position)) errors.position = TPL.auth.positionMoreMaxLength;

  // Проверка description
  if (isNoValidMaxL300(data.description)) errors.description = TPL.auth.invalidDescription;


  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
}