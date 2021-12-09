// User reducer types
export enum userActionType {
  LOADING_USER        = `LOADING_USER`,
  LOADING_USER_OFF    = `LOADING_USER_OFF`,
  SET_AUTHENTICATED   = `SET_AUTHENTICATED`,
  SET_UNAUTHENTICATED = `SET_UNAUTHENTICATED`,
  SET_USER            = `SET_USER`,
  SET_CREDENTIALS     = `SET_CREDENTIALS`,
  UPDATE_USER         = `UPDATE_USER`
};


// UI reducer types
export enum uiActionType {
  LOADING_UI         = `LOADING_UI`,
  LOADING_UI_OFF     = `LOADING_UI_OFF`,
  SET_SCREEN_FORMATS = `SET_SCREEN_FORMATS`,
  SET_ERROR          = `SET_ERROR`,
  CLEAR_ERROR        = `CLEAR_ERROR`,
  SET_MESSAGE        = `SET_MESSAGE`,
  CLEAR_MESSAGE      = `CLEAR_MESSAGE`
};


// Data reducer types
export enum dataActionType {
  LOADING_DATA       = `LOADING_DATA`,
  LOADING_DATA_OFF   = `LOADING_DATA_OFF`,

  SET_INITIAL        = `SET_INITIAL`,
  SET_SELECTED_DATES = `SET_SELECTED_DATES`,

  SET_CSS_DB         = `SET_CSS_DB`,
  SET_CSS_INST_DB    = `SET_CSS_INST_DB`,
  SET_CSS_EXP_DB     = `SET_CSS_EXP_DB`,
  SET_BC_DB          = `SET_BC_DB`
};