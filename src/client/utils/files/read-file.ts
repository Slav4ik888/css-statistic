
/** Читает и возвращает данные текстового файла */
export function readFile(e: any, callback: Function) {
  let selectedFile = e.target.files[0];

  const reader = new FileReader();
  reader.onload = function (e) {
    const fileContent = e.target.result;
    if (typeof fileContent !== 'string') console.log(`fileContent !== 'string':`, fileContent);
    
    const data = JSON.parse(fileContent as string);
    callback(data);
  }

  if (!selectedFile) return;
  reader.readAsText(selectedFile);
}


/** Читает и сохраняет обработанные данные */
// export function readJSONAndProcessData(e: any, saveDataFunc: Function) {
//   let clients = [];

//   // Запускаем после прочтения файла с данными
//   const callback = (json) => {
//     const data = JSON.parse(json);
//     clients = [...data];
    
//     return saveDataFunc(clients); // Сохраняем прочитанное
//   }

//   readFile(e, callback);
// }
