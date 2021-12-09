function isChanges(first, second) {
  // console.log('second: ', second);
  // console.log('first: ', first);
  let result = false; // Нет изменений

  for (let key in second) {
    if (Object.prototype.hasOwnProperty.call(second, key)) {
      // console.log('second[key]: ', second[key]);

      if (typeof second[key] === `object`) { // Ищем string | number | boolean
        const res = isChanges(first?.[key], second?.[key]);
        if (res) {
          result = true;
          // console.log(`result IN1: ${key}: `, first?.[key], ` - `, second?.[key]);
        }
      }
      else if (second?.[key] !== first?.[key]) {
        // console.log('second[key]: ', second[key]);
        // console.log('first[key]: ', first?.[key]);
        // console.log(`result IN2: ${key}: `, second?.[key], ` - `, first?.[key]);

        result = true;
      }
    }
  }

  return result;
};


/**
 * Проверяет были ли изменения в новом объекте
 * @param prevObj - первоначальный объект
 * @param newObj  - новый объект
 * 
 * @return false - if not changes
 */
export default function checkIsChanges(prevObj, newObj) {
  // console.log('newObj: ', newObj);
  // console.log('prevObj: ', prevObj);
  const result1 = isChanges(prevObj, newObj);
  // console.log('result1: ', result1);
  const result2 = isChanges(newObj, prevObj);
  // console.log('result2: ', result2);

  return result1 || result2;
};
