import { ERR_TEMP } from "./error-templates.js";


export default function getErrorMessage(template, message, value) {
  const label = message ? `"${message}" ` : ``;

  switch (template) {
    case ERR_TEMP.NotBeError:            return `Поле ${label}не должно быть ошибкой.`;
    case ERR_TEMP.MustBeNumber:          return `Поле ${label}должно быть числом.`;
    case ERR_TEMP.MustBeOneOfSeveral:    return `Поле ${label}не является одним из допустимых значений.`;
    case ERR_TEMP.MustNotBeEmpty:        return `Поле ${label}не должно быть пустым.`;
    case ERR_TEMP.MustBeLess:            return `Поле ${label}должно быть меньше ${value} символов.`;
    case ERR_TEMP.MustBeBool:            return `Не корректный тип данных. Поле ${label}должно быть "да" или "нет".`;
    case ERR_TEMP.MustBeString:          return `Не корректный тип данных. Поле ${label}должно быть строкой.`;
    case ERR_TEMP.MustBeObject:          return `Не корректный тип данных. Поле ${label}должно быть объектом.`;
    
    case ERR_TEMP.DevMustBeOneOfSeveral: return `Поле ${label}не является одним из допустимых значений. Это ошибка разработчика.`;
    case ERR_TEMP.DevMustNotBeEmpty:     return `Поле ${label}не должно быть пустым. Это ошибка разработчика.`;

    default: return ``; 
  }
}
