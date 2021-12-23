import { PathInfo } from "../../../../types";


// Возвращает объект с type & value
export const getPathInfo = (path: string): PathInfo => {
  const pathInfo: PathInfo = { type: undefined, value: undefined};
  const pathname = path.slice(8);

  if (pathname.length) {
    const pathStr = pathname.split(`=`);
    pathInfo.type = pathStr[0];
    pathInfo.value = pathStr[1];
  }
  return pathInfo;
};


export const getPathId = (path: string): PathInfo => {
  const pathInfo: PathInfo = { type: undefined, value: undefined};

  if (path?.length) {
    const pathStr = path.split(`/`);
    pathInfo.type = pathStr[1];
    pathInfo.value = pathStr[2];
  }
  return pathInfo;
};