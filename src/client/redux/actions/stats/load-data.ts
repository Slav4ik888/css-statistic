import { apiWithoutCookie } from '../../api';
// Redux
import { statsActionType as Type } from '../../action-types';
import { Dispatch } from '../../redux-types';
// Functions
import { handleError } from '../universal/handle-error';
import { getAllDBFromLocalStorage } from './utils/get-all-db-from-local-storage';
import setDBDataToStore from './utils/set-db-data-to-store';
import setAllDBToLocalStorage from './utils/set-all-db-to-local-storage';
// Types & Consts
import { ResGoogleCSS, ResGoogleBC } from '../../../../types';
import { cfg } from '../../../../../config';




const setDataToStoreFromLocalStorage = (dispatch: any) => {
  const { res1, res2 }: { res1: ResGoogleCSS, res2: ResGoogleBC } = getAllDBFromLocalStorage()
  setDBDataToStore(dispatch, res1, res2);
};



const setDataToStoreFromGoogle = async (dispatch: any) => {
  const res1: ResGoogleCSS = await apiWithoutCookie.get(cfg.urls.G_CSS);
  const res2: ResGoogleBC  = await apiWithoutCookie.get(cfg.urls.G_BADCOM);
      
  setDBDataToStore(dispatch, res1, res2);
  setAllDBToLocalStorage(res1, res2);
};


export const loadData = () => async (dispatch: Dispatch) => {
  dispatch({ type: Type.LOADING_STATS });

  try {
    if (cfg.isDev) setDataToStoreFromLocalStorage(dispatch);
    else await setDataToStoreFromGoogle(dispatch);
  
    dispatch({ type: Type.LOADING_STATS_OFF });
  }
  catch (err) { handleError(err, dispatch, Type.LOADING_STATS_OFF) }
};
