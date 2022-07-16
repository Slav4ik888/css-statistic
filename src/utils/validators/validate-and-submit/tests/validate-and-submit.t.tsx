// import * as React from 'react';
// import * as Enzyme from 'enzyme';
// import * as Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import { shallow } from 'enzyme';
// import { mocks } from './mocks';
// import Component from './component';
// import boolToNumber from '../../../numbers/bool-to-number';
// import { mockHookBase } from '../../../../client/utils/hooks/tests/mocks/hook-base';


// Enzyme.configure({ adapter: new Adapter() });


// describe(`validateAndSubmit`, () => {
//   beforeEach(() => jest.clearAllMocks());

//   const onSubmit = jest.fn();
//   const onError  = jest.fn(bool => !!bool);

//   mocks.forEach((m, i) => it(`${i + 1}`, () => {
//     const component = shallow(<Component
//       type      = {m[0].type}
//       data      = {m[0].data}
//       exit      = {m[0].exit}
//       hookOpen  = {mockHookBase}
//       onSubmit  = {onSubmit}
//       onError   = {onError}
//     />);

//     component.find(`#id`).simulate(`click`);

//     expect(onSubmit).toHaveBeenCalledTimes(boolToNumber(m[1].onSubmit));
//     expect(onError).toHaveBeenCalledTimes(1);
//     expect(onError.mock.results[0].value).toBe(m[1].onError);
//     expect(mockHookBase.isChange).toBe(m[1].isChange);
//     expect(mockHookBase.open).toBe(m[1].open);
//     expect(mockHookBase.close).toBe(m[1].close);
//   }))
// })

// // npm run test validate-and-submit.test.ts
