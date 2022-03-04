import { userAdmin } from "../../../../templates/mocks";
import { Validator } from "../../../../types";
import { Mocks } from "./types";



export const mocks: Mocks = [
  [{ type: Validator.USER_UPDATE, data: {} },        { onSubmit: false, onError: true,  isChange: true,  open: true,  close: false }],
  [{ type: Validator.USER_UPDATE, data: userAdmin }, { onSubmit: true,  onError: false, isChange: false, open: true,  close: false }],
  
];
