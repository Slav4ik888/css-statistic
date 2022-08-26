import fs from 'fs';
// import { logFiles } from '../../server/libs/logs/index.js';


export const removeFile = (filepath, userEmail) => {
  fs.rm(filepath, (err) => {
    console.log(`[removeFile] - User: ${userEmail}, rm file: ${filepath}, удаление с ошибкой... ${err}`);
    // if (err) logFiles.error(`[removeFile] - User: ${userEmail}, rm file: ${filepath}, удаление с ошибкой... ${err}`)
    // else logFiles.info(`[removeFile] - User: ${userEmail}, rm file: ${filepath} - success!`);
  });

  return;
};
