//получаем json из db по указанному url
export const getData = async function(url) {

  const response = await window.fetch(url);
  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, 
    статус ошибки ${response.status}!`);
  }
  return await response.json();
};