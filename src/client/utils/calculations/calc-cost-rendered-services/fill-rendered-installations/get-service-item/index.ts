import { DbItem, ServiceItem, ServiceType } from "../../../../../../types";

export const getServiceItem = (crs: object, item: DbItem): ServiceItem => {
  return crs[ServiceType.INSTALL]
    ?.[item?.range]?.[item?.typeClient]?.[item?.typeInstall];
}