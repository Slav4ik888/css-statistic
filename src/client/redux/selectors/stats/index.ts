import { State } from "../../redux-types";


export const getStatsLoading = (state: State) => state.stats.loading;

export const getDBs = (state: State) => ({
  cssDb     : state.stats.cssDb,
  cssInstDb : state.stats.cssInstDb,
  cssExpDb  : state.stats.cssExpDb,
  badcomDb  : state.stats.badcomDb
});

export const getSelectedDates = (state: State) => state.stats.selectedDates;