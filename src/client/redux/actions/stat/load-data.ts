import { apiWithoutCookie } from "../../api";
// Redux
import { statActionType as Type } from "../../action-types";
import { Dispatch } from "../../redux-types";
// Functions
import { handleError } from "../universal/handle-error";
// Types & Consts
import { ResGoogleCSS, ResGoogleBC } from "../../../../types";
import { cfg } from '../../../../../config';
import { getAllDBFromLocalStorage } from "./utils/get-all-db-from-local-storage";
import setDBDataToStore from "./utils/set-db-data-to-store";
import setAllDBToLocalStorage from "./utils/set-all-db-to-local-storage";



export const loadData = () => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_DATA });

  try {
    if (cfg.isDev) {
      const { res1, res2 }: { res1: ResGoogleCSS, res2: ResGoogleBC } = getAllDBFromLocalStorage()
      setDBDataToStore(dispatch, res1, res2);
    }
    else {
      const res1: ResGoogleCSS = await apiWithoutCookie.get(cfg.urls.G_CSS);
      const res2: ResGoogleBC  = await apiWithoutCookie.get(cfg.urls.G_BADCOM);
      
      setDBDataToStore(dispatch, res1, res2);
      setAllDBToLocalStorage(res1, res2);
    }
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_DATA_OFF) }
};