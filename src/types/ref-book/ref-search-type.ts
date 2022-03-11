
export enum RefSearchType {
  FLIGHT_TRANSPORT       = "FlightTransport",         // ТС в Рейс
  FLIGHT_DRIVER          = "FlightDriver" ,           // Водитель в Рейс
  CAR_ORDER_CARRIER      = "CarrierOrderCarrier",     // Компания Перевозчика
  CAR_ORDER_LOGIS        = "CarrierOrderLogis",       // ТС Логис НЕ из Рейса
  CAR_ORDER_LOGIS_FLIGHT = "CarrierOrderLogisFlight", // ТС Логис из Рейса
  CAR_ORDER_TEMP_STORE   = "CarrierOrderTempStore",   // Адрес СВХ

  COMPANY_CONTACT        = "CompanyContact" // Add ContactId to CompanyContacts list
};
