import { ServiceType } from "../../../../../types";

export default function createRenderedServices(crs: any) {

  let services = [];
  const install = crs[ServiceType.INSTALL];

  for (const range in install) {
    if (Object.prototype.hasOwnProperty.call(install, range)) {

      for (const client in install[range]) {
        if (Object.prototype.hasOwnProperty.call(install[range], client)) {

          for (const instType in install[range][client]) {
            if (Object.prototype.hasOwnProperty.call(install[range][client], instType)) {
              const path = install[range][client][instType];
              
              const item = {
                label : path.label,
                cost  : path.cost,
                count : path.count,
                total : path.total
              };

              services.push(item);
            }
          }
        }
      }
    }
  }

  return services;
};