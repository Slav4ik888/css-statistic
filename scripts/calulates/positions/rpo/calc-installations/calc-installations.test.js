import calcInstallations from './calc-installations.js';
import calcInstTotal from './calc-inst-total.js';
import costRenderedServices from '../cost-rendered-services.js';
import mockDB from './mock-db.js';
import mockResult from './mock-result.js';


export function testCalcInstallations() {
  calcInstallations(mockDB, costRenderedServices);
  const total = calcInstTotal(costRenderedServices);
  return total;
};

testCalcInstallations();
console.log('costRenderedServices: ', costRenderedServices);
