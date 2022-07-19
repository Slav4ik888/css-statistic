// import * as React from 'react';
// import * as Enzyme from 'enzyme';
// import { shallow } from 'enzyme';
// import * as Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// import Component from './component/index';
// import { Mocks } from './types';
// import boolToNumber from '../../../../utils/numbers/bool-to-number';


// const mocks: Mocks = [
//   [{ storeData: { id: 10, name: `Slava`, any: `any 1`, some: `some 1` }, newData: { id: 10, name: `Slava`, any: `any 1`,     some: `some 1` }, exit: true }, { res: false, open: false, close: true, confirm: false }],
//   [{ storeData: { id: 10, name: `Slava`, any: `any 1`, some: `some 1` }, newData: { id: 10,                any: `any 1`,     some: `some 1` }, exit: true }, { res: true,  open: false, close: true, confirm: false }],
//   [{ storeData: { id: 10, name: `Slava`, any: `any 1`, some: `some 1` }, newData: { id: 1,  name: `Slava`, any: `any 1 +++`, some: `some 1` }, exit: true }, { res: true,  open: false, close: true, confirm: false }]
// ];


// Enzyme.configure({ adapter: new Adapter() });


// describe(`checkChangesInSubmit`, () => {
//   beforeEach(() => jest.clearAllMocks());

//   const onSubmit = jest.fn();
//   const onNull   = jest.fn();


//   mocks.forEach((m, i) => it(`${i + 1}`, () => {

//     const component = shallow(<Component
//       storeData = {m[0].storeData}
//       newData   = {m[0].newData}
//       exit      = {m[0].exit}
//       onNull    = {onNull}
//       onSubmit  = {onSubmit}
//     />);

//     component.find(`#id`).simulate(`click`);
//     expect(onSubmit).toHaveBeenCalledTimes(boolToNumber(m[1].res));
//     expect(onNull).toHaveBeenCalledTimes(boolToNumber(!m[1].res));
      
//   }))
// });


// // npm run test check-changes-in-submit.test.tsx
