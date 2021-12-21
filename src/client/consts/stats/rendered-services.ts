import { ServiceType, ServiceRange, ServiceClient, ServiceAge } from "../../../types";

export default {
  [ServiceType.INSTALL]: {
    [ServiceRange.KA]: {
      // ЮЛ
      [ServiceClient.LEGAL]: {
        [ServiceAge.NEW]: {
          label : `Ka - новый`,
          cost  : 6000,
          count : 0,
          total : 0,
        },
        [ServiceAge.REPEAT]: {
          label : `Ka - повторная`,
          cost  : 3000,
          count : 0,
          total : 0,
        }
      },
      // ФЛ
      [ServiceClient.INDIVID]: {
        [ServiceAge.NEW]: {
          label : `Ka (ФЛ) - повый`,
          cost  : 3000,
          count : 0,
          total : 0,
        },
        [ServiceAge.REPEAT]: {
          label : `Ka (ФЛ) - повторная`,
          cost  : 1500,
          count : 0,
          total : 0,
        }
      }
    },
    
    [ServiceRange.KU]: {
      [ServiceClient.LEGAL]: {
        [ServiceAge.NEW]: {
          label : `Ku - новый`,
          cost  : 8000,
          count : 0,
          total : 0,
        },
        [ServiceAge.REPEAT]: {
          label : `Ku - повторная`,
          cost  : 4000,
          count : 0,
          total : 0
        }
      }
    }
  },
  totalInstall: 0,  // Итог по инсталляциям
  total: 0          // Итог
};
