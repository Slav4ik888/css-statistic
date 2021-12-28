import { Credential } from '../../../types';

const labelNoCred = (c: Credential) => `У вас нет доступа к операции: "${c.label}"`

export default labelNoCred;