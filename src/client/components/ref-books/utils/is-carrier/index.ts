import { CompanyType } from "../../../../../types";

export default function isCarrier(types: Array<CompanyType>): boolean {
  const res = types?.find(type => type === CompanyType.CARRIER);

  return Boolean(res);
}