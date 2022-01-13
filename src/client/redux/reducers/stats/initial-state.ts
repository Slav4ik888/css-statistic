import { StateStats } from '../../redux-types';


export const initialState: StateStats = {
  loading       : false,
  selectedDates : null,

  cssDb         : null, // Да - Инциденты  
  cssInstDb     : null, // Да - Инсталляции 
  cssExpDb      : null, // Да - Опытное пр-во
  badcomDb      : null  // Badcom
};
