import { DB_Name, ResGoogleBC, ResGoogleCSS } from "../../../../../../types";
import { Dispatch } from "../../../../redux-types";
import { statsActionType as Type } from "../../../../action-types";
import { parseDbByFields } from "../parsers";


export default function setDBDataToStore(dispatch: Dispatch, res1: ResGoogleCSS, res2: ResGoogleBC) {
  console.log(`[${DB_Name.CssDB}]`,     res1.data.DATA777.data1.length);
  console.log(`[${DB_Name.CssExpDB}]`,  res1.data.DATA777.data2.length);
  console.log(`[${DB_Name.CssInstDB}]`, res1.data.DATA777.data3.length);
  console.log(`[${DB_Name.BadcomDB}]`,  res2.data.DATA777.data1.length);
  
  // CSS

  dispatch({
    type: Type.SET_CSS_DB,
    payload: parseDbByFields(res1.data.DATA777.data1, DB_Name.CssDB)
  });
  dispatch({
    type: Type.SET_CSS_EXP_DB,
    payload: parseDbByFields(res1.data.DATA777.data2, DB_Name.CssExpDB)
  });
  dispatch({
    type: Type.SET_CSS_INST_DB,
    payload: parseDbByFields(res1.data.DATA777.data3, DB_Name.CssInstDB)
  });

  
  // Badcom

  dispatch({
    type: Type.SET_BC_DB,
    payload: parseDbByFields(res2.data.DATA777.data1, DB_Name.BadcomDB)
  });
}