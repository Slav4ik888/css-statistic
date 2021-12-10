import { ResGoogleBC, ResGoogleCSS } from "../../../../../../types";
import { Dispatch } from "../../../../redux-types";
import { statActionType as Type } from "../../../../action-types";


export default function setDBDataToStore(dispatch: Dispatch, res1: ResGoogleCSS, res2: ResGoogleBC) {
  
  // CSS

  dispatch({
    type: Type.SET_CSS_DB,
    payload: res1.data.DATA777.data1
  });
  dispatch({
    type: Type.SET_CSS_EXP_DB,
    payload: res1.data.DATA777.data2
  });
  dispatch({
    type: Type.SET_CSS_INST_DB,
    payload: res1.data.DATA777.data3
  });

  
  // Badcom

  dispatch({
    type: Type.SET_BC_DB,
    payload: res2.data.DATA777.data1
  });
}