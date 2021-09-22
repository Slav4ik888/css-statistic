// Возвращает Кол-во инцидентов находящихся в работе 
export default function calcIncInWork(arrCSS, arrBC) {
  let result = 0;

  if (arrCSS?.length) {
    arrCSS.forEach(obj => {
      if (obj.status === `В работе`) result++;
    });
  };

  if (arrBC?.length) {
    arrBC.forEach(obj => {
      if (obj.status === `В работе`) result++;
    });
  };

  return result;
};