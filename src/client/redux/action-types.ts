export enum userActionType {
  LOADING_USER        = `LOADING_USER`,
  LOADING_USER_OFF    = `LOADING_USER_OFF`,
  SET_AUTHENTICATED   = `SET_AUTHENTICATED`,
  SET_UNAUTHENTICATED = `SET_UNAUTHENTICATED`,
  SET_USER            = `SET_USER`,
  SET_CREDENTIALS     = `SET_CREDENTIALS`,
  UPDATE_USER         = `UPDATE_USER`
};


// export enum dataActionType {
//   LOADING_DATA        = `LOADING_DATA`,
//   LOADING_DATA_OFF    = `LOADING_DATA_OFF`,
//   SET_ROLES           = `SET_ROLES`,
//   ADD_ROLE            = `ADD_ROLE`,
//   UPDATE_ROLE         = `UPDATE_ROLE`,
//   SET_USERS           = `SET_USERS`,
//   ADD_USER            = `ADD_USER`,
//   UPDATE_ANY_USER     = `UPDATE_ANY_USER`
// };


export enum uiActionType {
  LOADING_UI          = `LOADING_UI`,
  LOADING_UI_OFF      = `LOADING_UI_OFF`,
  SET_SCREEN_FORMATS  = `SET_SCREEN_FORMATS`,
  SET_ERROR           = `SET_ERROR`,
  CLEAR_ERROR         = `CLEAR_ERROR`,
  SET_MESSAGE         = `SET_MESSAGE`,
  CLEAR_MESSAGE       = `CLEAR_MESSAGE`
};


export enum refBooksActionType {
  LOADING_REF_ON      = `LOADING_REF_ON`,
  LOADING_REF_OFF     = `LOADING_REF_OFF`,
  
  SET_REF_BOOK        = `SET_REF_BOOK`,
  SET_NEW_ID          = `SET_NEW_ID`,
  
  SET_ROLES           = `SET_ROLES`,
  UPDATE_ROLE         = `UPDATE_ROLE`,
  DELETE_ROLE         = `DELETE_ROLE`,
  
  SET_USERS           = `SET_USERS`,
  UPDATE_REF_USER     = `UPDATE_REF_USER`,
  DELETE_REF_USER     = `DELETE_REF_USER`,
};


export enum statsActionType {
  LOADING_STATS       = `LOADING_STATS`,
  LOADING_STATS_OFF   = `LOADING_STATS_OFF`,

  SET_INITIAL         = `SET_INITIAL`,
  SET_SELECTED_DATES  = `SET_SELECTED_DATES`,

  SET_CSS_DB          = `SET_CSS_DB`,
  SET_CSS_INST_DB     = `SET_CSS_INST_DB`,
  SET_CSS_EXP_DB      = `SET_CSS_EXP_DB`,
  SET_BC_DB           = `SET_BC_DB`
};

export enum bxActionType {
  LOADING_BX       = `LOADING_BX`,
  LOADING_BX_OFF   = `LOADING_BX_OFF`,
};
