import { isEmpty } from './is-empty.js';

export const getFilesSize = (files) => {
  let size = 0;
  if (isEmpty(files)) return size;
  
  for (let file of files) {
    size += file.size;
  };
  return size;
};
