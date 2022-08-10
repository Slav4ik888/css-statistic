import { cloneObj } from "../../objects-base";
import { Mocks } from "./types";


const prevObj = {
  id: `id123`,
  arrStr: [`123`, `234`],
  arrObj: [{ a: `123`, b: `234` }, { c: `567`, d: `890` }],
  obj: {
    a: {
      aa: `str`,
      ab: {
        aba: `string`
      }
    }
  },
  arr: [1, 2],
  str: `hi buhay`
};

const updatedFields = {
  id: `id1`,
  arrStr: [`123`],
  arrObj: [{ a: `123`, b: `234` }, { c: `567` }],
  obj: {
    a: {
      aa: `str`,
      ab: {}
    },
    b: `str`
  }
};

const updatedObj = {
  id: `id1`,
  arrStr: [`123`],
  arrObj: [{ a: `123`, b: `234` }, { c: `567` }],
  obj: {
    a: {
      aa: `str`,
      ab: {}
    },
    b: `str`
  },
  arr: [1, 2],
  str: `hi buhay`
};


export const mocks: Mocks = [
  [{
    description : `updatedFields is undefined`,
    prevObj,
    updatedFields: undefined
  },
    prevObj],
  [{
    description : `prevObj is undefined`,
    prevObj: undefined,
    updatedFields
  },
    updatedFields],
  [{
    description : `prevObj = updatedFields`,
    prevObj,
    updatedFields: cloneObj(prevObj)
  },
    prevObj],
  
  [{
    description : `updatedFields = {}`,
    prevObj,
    updatedFields: {}
  },
    prevObj],
  
  [{
    description : `With changes`,
    prevObj,
    updatedFields
  },
    updatedObj],
  
  [{
    description : `Some fields changed`,
    prevObj,
    updatedFields: {
      obj: {
        a: {
          aa: `new str`,
        }
      }
    }
  },
  {
    id: `id123`,
    arrStr: [`123`, `234`],
    arrObj: [{ a: `123`, b: `234` }, { c: `567`, d: `890` }],
    obj: {
      a: {
        aa: `new str`,
        ab: {
          aba: `string`
        }
      }
    },
    arr: [1, 2],
    str: `hi buhay`
  }],
];
