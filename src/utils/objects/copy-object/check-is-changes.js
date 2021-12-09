/**
 * Проверяет были ли изменения в новом объекте
 * @param prevObj - первоначальный объект
 * @param newObj  - новый объект
 */
export default function checkIsChanges(prevObj, newObj) {
  console.log('newObj: ', newObj);
  console.log('prevObj: ', prevObj);
  let result = false; // Нет изменений

  for (let key in newObj) {
    if (Object.prototype.hasOwnProperty.call(newObj, key)) {
      // console.log('newObj[key]: ', newObj[key]);

      if (typeof newObj[key] === `object`) { // Ищем string | number | boolean
        const res = checkIsChanges(prevObj[key], newObj[key]);
        if (res) {
          result = true;
          console.log('result IN: ', result);
        }
      }
      else if (newObj[key] !== prevObj?.[key]) {
        console.log('newObj[key]: ', newObj[key]);
        console.log('prevObj[key]: ', prevObj?.[key]);

        result = true;
      }
    }
  }

  return result;
};
