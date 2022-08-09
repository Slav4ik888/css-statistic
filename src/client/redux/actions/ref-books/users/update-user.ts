import { User } from "../../../../../types";
import { update } from '../../user';


/**
 * Обновление данных другого пользователя
 */
export const updateAnyUser = (user: Partial<User>) => (dispatch: any) => update(dispatch, user, false);
