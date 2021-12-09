import api from "../../api";
// Redux
import { dataActionType as Type } from "../../action-types";
import { Dispatch } from "../../redux-types";
// Functions
import { handleError } from "../universal/handle-error";
// Types & Consts
import { URL_G_CSS, URL_G_BADCOM } from '../../../../../consts.js';





export const loadData = () => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_DATA });

  try {
    let res1: { data: { DATA777?: { data1: Array<any>, data2: Array<any>, data3: Array<any> } } };
    let res2: { data: { DATA777?: { data1: Array<any> } } };

    res1 = await api.get(URL_G_CSS);
    res2 = await api.get(URL_G_BADCOM);

    // setStorageData(DB_NAME.CssDB, DB.CssDB);
    // setStorageData(DB_NAME.CssInstDB, DB.CssInstDB);
    // setStorageData(DB_NAME.CssExpDB, DB.CssExpDB);
    
    dispatch({
      type: Type.SET_CSS_DB,
      payload: res1.data.DATA777.data1
    });
    dispatch({
      type: Type.SET_CSS_INST_DB,
      payload: res1.data.DATA777.data3
    });
    dispatch({
      type: Type.SET_CSS_EXP_DB,
      payload: res1.data.DATA777.data2
    });

    // setStorageData(DB_NAME.BadcomDB, DB.BadcomDB);
    dispatch({
      type: Type.SET_BC_DB,
      payload: res1.data.DATA777.data1
    });
    
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_DATA_OFF) }
};