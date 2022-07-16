import { SearchType, SearchOptionsTypes, Role, Person, User, SearchOptionType } from "../../../../../../../types";



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



const getTitle = (type: SearchType, obj: any) => {
  let title = '';

  switch (type) {
    case SearchType.ROLES              : title = getRoleTitle(obj);      break;
    case SearchType.USERS              : title = getUserTitle(obj);      break;
  }

  // Удаляем последнюю запятую
  if (title.length > 3) title = title.slice(0, title.length - 2);
  if (title === `Новая`) title += ` ` + obj?.id;
  return title;
};


const getSearchItem = (type: SearchType, item: any): SearchOptionType => ({
  inputValue: ``,
  title: getTitle(type, item),
  id: item?.id
});


export const getSearchTitles = (type: SearchType, array: Array<any>): SearchOptionsTypes => {
  let list = [] as SearchOptionsTypes;
  if (!array?.length) return list;

  array.forEach((item) => {
    const created = getSearchItem(type, item);
    if (created.title.trim()) list.push(created)
  });

  return list;
};
