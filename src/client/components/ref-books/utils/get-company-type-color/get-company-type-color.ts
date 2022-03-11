import { CompanyType } from "../../../../../types";

export default function getCompanyTypeColor(type: CompanyType) {

  switch (type) {
    case CompanyType.CUSTOMER:  return { color: `#440022` }
    case CompanyType.CARRIER:   return { color: `#440022` }
    case CompanyType.CUSTOMER:  return { color: `#440022` }
    case CompanyType.CONSIGNEE: return { color: `#440022` }
  }
};