import { User } from '../../../../types';
import { StateUser } from '../../redux-types';


export const initialState: StateUser = {
  loading         : false,
  authenticated   : false,

  user            : {} as User
};
