
/** Получаем json из db по указанному url */
export const getData = async function(url: string) {

  const response = await window.fetch(url);
  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, 
    статус ошибки ${response.status}!`);
  }
  return await response.json();
};
