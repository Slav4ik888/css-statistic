import * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import DialogConfirm from '.';
import { ConfirmType } from '../../../../types';
import { arrFromObj, noop } from '../../../../utils/objects/objects-base';


Enzyme.configure({ adapter: new Adapter() });
const arrComfirmType = arrFromObj(ConfirmType);

describe(`<Dialog-confirm />`, () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const onOk = jest.fn();
  const onCancel = jest.fn();

  arrComfirmType.forEach(typeOk => it(`typeOk ${typeOk}`, () => {
    const component = shallow(
      <DialogConfirm
        typeOk   = {typeOk as unknown as ConfirmType}
        open     = {true}
        title    = "Подтвердите операцию"
        onOk     = {onOk}
        onCancel = {onCancel}
      />
    );

    component.find(`.buttonOk`).simulate(`click`);
    expect(onOk).toHaveBeenCalledTimes(1);

    if (typeOk as unknown as ConfirmType !== ConfirmType.NO_QUESTIONS) {
      component.find(`.buttonCancel`).simulate(`click`);
      expect(onCancel).toHaveBeenCalledTimes(1);
    }
  }));
});

// npm test dialog-confirm.e2e.test.tsx