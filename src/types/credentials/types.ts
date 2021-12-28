

export enum PermType {
  READ   = `Читать`,
  ADD    = `Добавлять`,
  CHANGE = `Изменять`,
  DEL    = `Удалять`
};


export enum CredType {
  NO  = `Нет доступа`,
  OWN = `Свои`,
  ALL = `Все`
};

export enum RuleType {
  PERM = `P`, // Permission
  ADDI = `A`, // Additional
};