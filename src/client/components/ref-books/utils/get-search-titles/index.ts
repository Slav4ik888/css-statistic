import { SearchType, Address, Contact, Phone, Transport, Role, Driver, Company, Person, User, CargoBasic, CustomerOrder } from "../../../../../types";
import getDigit from "../../../../../utils/helpers/get-digits/get-digits";
import { getTransportNumber } from "../../../../utils/helpers/get-transport-number";

const getPhones = (phones: Array<Phone>) => {
  let strPhones = ``;

  if (phones?.length) {
    phones.forEach(p => strPhones += getDigit(p.number) + ", ")
  }
  
  return strPhones;
};

const getPerson = (person: Person) => {
  let title = ``;

  if (person) {
    if (person?.secondName) title += person.secondName + " ";
    if (person?.firstName) title += person.firstName + " ";
    if (person?.middleName) title += person.middleName + ", ";
  }

  return title;
};

const getRoleTitle = (obj: Role) => {
  let title = ``;
  if (obj?.role) title += obj.role + ", ";
  if (obj?.description) title += obj.description + ", ";

  return title;
};

const getUserTitle = (obj: User) => {
  let title = getPerson(obj?.person);
  title += obj.email + ", ";
  
  if (obj?.role.type) title += obj.role.type + ", ";

  return title;
};

const getDriverTitle = (obj: Driver) => {
  let title = getPerson(obj?.person);
  title += getPhones(obj.phones);

  if (obj?.description) title += obj.description + ", ";

  return title;
};

const getTransportTitle = (obj: Transport) => {
  let title = ``;

  if (obj?.number) title += getTransportNumber(obj.number) + ", ";
  if (obj?.type) title += obj.type + ", ";
  if (obj?.brand) title += obj.brand + ", ";
  if (obj?.model) title += obj.model + ", ";
  if (obj?.description) title += obj.description + ", ";

  return title;
};

const getCompanyTitle = (obj: Company) => {
  let title = ``;
  if (obj?.label) title += obj.label + ", ";
  if (obj?.ITN) title += obj.ITN + ", ";
  if (obj?.description) title += obj.description + ", ";

  return title;
};

const getAddressTitle = (obj: Address) => {
  let title = ``;
  
  if (obj?.region) title += obj.region + ", ";
  if (obj?.city) title += obj.city + ", ";
  if (obj?.address) title += obj.address + ", ";
  if (obj?.description) title += obj.description + ", ";
  if (obj?.id) title += obj.id.slice(0, 5) + ", ";

  return title;
};

const getContactTitle = (obj: Contact) => {
  let title = getPerson(obj?.person);
  title += getPhones(obj.phones);

  if (obj?.position) title += obj.position + ", ";
  if (obj?.description) title += obj.description + ", ";

  return title;
};

const getCargoTitle = (obj: CargoBasic) => {
  let title = obj.label + ", ";
  if (obj?.id) title += obj.id.slice(0, 3) + ", ";

  return title;
};


const getTitle = (type: SearchType, obj: any) => {
  let title = '';

  switch (type) {
    case SearchType.ROLES              : title = getRoleTitle(obj);      break;
    case SearchType.USERS              : title = getUserTitle(obj);      break;
    case SearchType.DRIVERS            : title = getDriverTitle(obj);    break;
    case SearchType.TRANSPORTS         : title = getTransportTitle(obj); break;
    
    case SearchType.COMPANY            :
    case SearchType.CARRIER            :
    case SearchType.PAYER              : title = getCompanyTitle(obj);   break;

    case SearchType.ADDRESS            :
    case SearchType.ADDRESS_IN_COMPANY : title = getAddressTitle(obj);   break;

    case SearchType.CONTACT            :
    case SearchType.CONTACT_IN_COMPANY : title = getContactTitle(obj);   break;

    case SearchType.CARGOS             : title = getCargoTitle(obj);     break;
  }

  // Удаляем последнюю запятую
  if (title.length > 3) title = title.slice(0, title.length - 2);
  if (title === `Новая`) title += ` ` + obj?.id;
  return title;
};


const getSearchItem = (type: SearchType, item: any) => ({
  inputValue: ``,
  title: getTitle(type, item),
  id: item.id
});


export const getSearchTitles = (type: SearchType, array: Array<any>) => {
  let list = [];
  if (!array?.length) return list;

  array.forEach((item) => {
    const created = getSearchItem(type, item);
    if (created.title.trim()) list.push(created)
  });

  return list;
};