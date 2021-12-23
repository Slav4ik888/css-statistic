export enum ViewType {
  EDIT = `Редактировать`,
  TEXT = `Показывать`
};

// Тип для выделения данных из пути (ссылки) course
export interface PathInfo {
  type  : string,
  value : string,
};