import { Person, RoleUser, RoleType } from "../../../../../types";
import { Mocks } from "./types";

const person = {
  firstName  : `Slava`,
  secondName : `Korzan`,
  middleName : ``
};

const personGreater = {
  firstName  : `012345678901234567890123456789_`,
  secondName : `012345678901234567890123456789_`,
  middleName : `012345678901234567890123456789_`
};

const personNoString = {
  firstName  : 123,
  secondName : false,
  middleName : {}
};


export const mocks: Mocks = [
  [
    {
      description: `All data in user right`,
      user: {
        id     : `userId_123`,
        active : true,
        email  : `sdf@mail.ur`,
        person,
        role   : {
          roleId : `roleId123`,
          type   : RoleType.ADMIN
        }
      }
    }, {
      errors: {}, valid: true
    }
  ],
  [
    {
      description: `All data is empty`,
      user: {
        id     : ``,
        active : `` as unknown as boolean,
        email  : ``,
        person : {} as Person,
        role: {
          type   : `Роль` as unknown as RoleType,
          roleId : ``
        }
      }
    }, {
      errors: {
        id         : "Поле \"id\" не должно быть пустым. Это ошибка разработчика.",
        active     : "Не корректный тип данных. Поле \"active\" должно быть \"да\" или \"нет\".",
        firstName  : "Не корректный тип данных. Поле \"Имя\" должно быть строкой.",
        secondName : "Не корректный тип данных. Поле \"Фамилия\" должно быть строкой.",
        middleName : "Не корректный тип данных. Поле \"Отчество\" должно быть строкой.",
        roleType   : "Поле \"Тип пользователя\" не является одним из допустимых значений.",
        roleId     : "Поле \"Тип роли\" не должно быть пустым."
      }, valid: false
    }
  ],
  [
    {
      description: `firstName & secondName & middleName NoString`,
      user: {
        id     : `userId_123`,
        active : true,
        email  : `sdf@mail.ur`,
        person : personNoString as unknown as Person,
        role   : {
          roleId : `roleId123`,
          type   : RoleType.USER
        }
      }
    }, {
      errors: {
        firstName  : "Не корректный тип данных. Поле \"Имя\" должно быть строкой.",
        secondName : "Не корректный тип данных. Поле \"Фамилия\" должно быть строкой.",
        middleName : "Не корректный тип данных. Поле \"Отчество\" должно быть строкой."
      }, valid: false
    }
  ],
  [
    {
      description: `firstName & secondName & middleName greater than maxlength`,
      user: {
        id     : `userId_123`,
        active : true,
        email  : `sdf@mail.ur`,
        person : personGreater,
        role   : {
          roleId : `roleId123`,
          type   : RoleType.USER
        }
      }
    }, {
      errors: {
        firstName  : "Поле \"Имя\" должно быть меньше 30 символов.",
        secondName : "Поле \"Фамилия\" должно быть меньше 30 символов.",
        middleName : "Поле \"Отчество\" должно быть меньше 30 символов."
      }, valid: false
    }
  ],
];
