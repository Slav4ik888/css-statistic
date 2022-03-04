import getErrorMessage from ".";
import { ERR_TEMP } from "./error-templates"

interface MockItem {
  err_t   : ERR_TEMP;
  message : string;
  value?  : number;
};

interface Mock extends Array<MockItem | string> {
  0: MockItem;
  1: string;
};

type Mocks = Array<Mock>;

const mocks: Mocks = [
  [{ err_t: null,                        message: `Foo-Baee`}, ``],
  [{ err_t: ERR_TEMP.NotBeError,         message: ``},         `Поле не должно быть ошибкой.`],
  [{ err_t: ERR_TEMP.NotBeError,         message: `Foo-Baee`}, `Поле "Foo-Baee" не должно быть ошибкой.`],
  [{ err_t: ERR_TEMP.MustBeNumber,       message: `Yee`},      `Поле "Yee" должно быть числом.`],
  [{ err_t: ERR_TEMP.MustNotBeEmpty,     message: `Yee`},      `Поле "Yee" не должно быть пустым.`],
  [{ err_t: ERR_TEMP.MustBeLess,         message: `MustBeLess`, value: 30 }, `Поле "MustBeLess" должно быть меньше 30 символов.`],
  [{ err_t: ERR_TEMP.MustBeBool,         message: `MustBeBool` }, `Не корректный тип данных. Поле "MustBeBool" должно быть "да" или "нет".`],
  [{ err_t: ERR_TEMP.MustBeString,       message: `MustBeString` }, `Не корректный тип данных. Поле "MustBeString" должно быть строкой.`],

  [{ err_t: ERR_TEMP.MustBeOneOfSeveral, message: `Foo-Baee`}, `Поле "Foo-Baee" не является одним из допустимых значений.`],
  
  [{ err_t: ERR_TEMP.DevMustBeOneOfSeveral, message: `Foo-Baee`}, `Поле "Foo-Baee" не является одним из допустимых значений. Это ошибка разработчика.`],
  [{ err_t: ERR_TEMP.DevMustNotBeEmpty,     message: `Yee`},      `Поле "Yee" не должно быть пустым. Это ошибка разработчика.`],
]

describe(`getErrorMessage`, () => {
  mocks.forEach((m, i) => {
    it(`${i}`, () => expect(getErrorMessage(m[0].err_t, m[0].message, m[0].value))
      .toEqual(m[1]))
  })
})

// npm run test get-error-message.test.ts
