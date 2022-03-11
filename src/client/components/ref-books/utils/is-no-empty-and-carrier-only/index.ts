import { CompanyType } from "../../../../../types";

export default function isNoEmptyAndCarrierOnly(types: Array<CompanyType>): boolean {
  if (!types?.length) return false; // Если ни один из типов не выбрали, то не показываем
  
  return types.length > 1 || types[0] !== CompanyType.CARRIER
}