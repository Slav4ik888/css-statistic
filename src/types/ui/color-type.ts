export interface Colors {
  color: string;
  background: string;
};

export enum ColorType {
  FLIGHT_CONDITION         = `Состояние рейса`,
  CARRIER_ORDER_CONDITION  = `Состояние заявки с перевозчиком`,
  CUSTOMER_ORDER_CONDITION = `Состояние заявки с заказчиком`,
  CUSTOMER_ORDER_STAGE     = `Этап по заявке с заказчиком`,
  CUSTOMER_ORDER_STATUS    = `Статус этапа по заявке с заказчиком`,
  ORDER_REGISTRATION       = `Статус подписания заявки`,
};
