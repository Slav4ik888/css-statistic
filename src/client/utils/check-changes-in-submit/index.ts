import checkIsChanges from "../../../utils/objects/check-is-changes";
import { UseOpen } from "../hooks/types";

// Проверяет были ли изменения и нужно ли закрыть окно при submit
export default function isChanges<T>(hookOpen: UseOpen, storeData: T, newData: T, exit?: boolean): boolean {
  
  const resultCheck = checkIsChanges(storeData, newData);
    
  // hookOpen.setIsChange(false);
  hookOpen.setConfirm(false);

  console.log('isChanges: ', resultCheck);
  if (!resultCheck) {
    if (exit) hookOpen.setClose();
    return false;
  }
  else {
    // if (exit) hookOpen.setClose();

    // Если есть изменения то не закрываем, чтобы далее если при валидации
    // вылезет ошибка, пользователь увидел её
    return true;
  }
}
