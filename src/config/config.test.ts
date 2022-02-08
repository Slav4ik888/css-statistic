import cfg from '.';
import { FORMAT, formatDate } from '../utils/dates';


describe(`config`, () => {
  it(`ASSEMBLY_TIME`, () => {
    const currentDate = formatDate(new Date().getTime(), FORMAT.YYYYMMDDt);
    const assembly = cfg.ASSEMBLY.DATE;
    expect(currentDate).toEqual(assembly);
  })
})

// npm run test config.test.ts
