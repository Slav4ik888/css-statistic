
export interface ContextPoint {
  mouseY: number,
  mouseX: number
};

export enum CxtMenuCustomerOrder {
  TO_PLAN  = `Переместить в "На распределении"`,
  TO_EXP   = `Переместить в "Экспедицию"`,
  TO_WORK  = `Переместить в "Работу"`,
  TO_DRAFT = `Переместить в "Черновики"`
}
