// Redux
import { statActionType as Type } from "../../action-types";
// Types
import { SelectedDates } from "../../../../types";


export const setSelectedDates = (selectedDates: SelectedDates) => async (dispatch: any) => {
  dispatch({
    type: Type.SET_SELECTED_DATES,
    payload: selectedDates
  });
};