import { getFio } from '..';
import { Person } from '../../../../../../types';
import { Mocks } from './types';


const mocks: Mocks = [
  [{ person: { firstName: `Вячеслав`, secondName: `Корзан`, middleName: `Александрович` } }, `Корзан Вячеслав Александрович`],
  [{ person: { firstName: `Вячеслав`, secondName: `Корзан`, middleName: `Александрович` }, short: true }, `Корзан В.А.`],
  [{ person: { firstName: `Вячеслав`, secondName: ``,       middleName: `Александрович` } }, `Вячеслав Александрович`],
  [{ person: { firstName: `Вячеслав`, secondName: ``,       middleName: `Александрович` }, short: true }, `В.А.`],
  [{ person: { firstName: ``, secondName: `Корзан`, middleName: `Александрович` } }, `Корзан Александрович`],
  [{ person: { firstName: ``, secondName: `Корзан`, middleName: `Александрович` }, short: true }, `Корзан А.`],
  [{ person: { firstName: `Вячеслав`, secondName: `Корзан`, middleName: `` } }, `Корзан Вячеслав`],
  [{ person: { firstName: `Вячеслав`, secondName: `Корзан`, middleName: `` }, short: true }, `Корзан В.`],
  
  [{ person: undefined, }, ``],
  [{ person: undefined, short: true }, ``],
  [{ person: null, }, ``],
  [{ person: null, short: true }, ``],
  [{ person: 0 as unknown as Person, }, ``],
  [{ person: 0 as unknown as Person, short: true }, ``],

]

describe(`getFio`, () => {
  mocks.forEach((m, i) => {
    it(`${i + 1}`, () => {
      expect(getFio(m[0]?.person, m[0]?.short)).toEqual(m[1])
    })
  })
})

// npm run test get-fio.test.ts
