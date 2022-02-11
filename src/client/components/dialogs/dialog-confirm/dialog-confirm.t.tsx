import * as React from 'react';
import * as renderer from 'react-test-renderer';
import DialogConfirm from '.';
import { ConfirmType } from '../../../../types';
import { arrFromObj } from '../../../../utils/objects/objects-base';


const arrComfirmType = arrFromObj(ConfirmType);

[true, false].forEach(bool => {
  arrComfirmType.forEach(typeOk => it(`Dialog-confirm ${bool} - ${typeOk}`, () => {
    const tree = renderer.create(
      <DialogConfirm
        typeOk   = {typeOk as unknown as ConfirmType}
        open     = {bool}
        title    = "Подтвердите операцию"
        onOk     = {() => { }}
        onCancel = {() => { }}
      />
    ).toJSON()

    expect(tree).toMatchSnapshot();
  }));
});

// npm run test.jest -- -u dialog-confirm.test.tsx
// npm test dialog-confirm.test.tsx
