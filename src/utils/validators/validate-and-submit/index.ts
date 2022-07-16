import { UseBase } from "../../../client/utils/hooks";
import { Validator } from "../../../types";
import validate from "../validate";


/**
 * Валидация и отправка данных (или вывод об ошибке)
 */
export default function validateAndSubmit<T>(
  type           : Validator,
  data           : T,
  submit         : Function,
  setErrors      : Function,
  hookOpen?      : UseBase,   // For setIsChange & close dialog after submit
  exit?          : boolean,   // If true that display will be closed atfer submit
  // isCondition?   : boolean,
  // condition?     : boolean,
  // conditionFunc? : Function
)
{
  const { valid, errors } = validate(type, data);

  if (!valid) {
    hookOpen?.setChanges(true);
    setErrors(errors);
  }
  else {
    setErrors(null);
    hookOpen?.setChanges(false);

    // if (isCondition) {
    //   if (condition) {
    //     if (exit) hookOpen.setClose();
    //     return conditionFunc(data);
    //   }
    // }
    submit(data);

    if (exit) hookOpen.setClose();
  }
}
