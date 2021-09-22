const tableView = document.querySelector(`.table-container`);
const leftContainer = document.querySelector(`.left-container`);

export const openTable = () => {
  leftContainer.classList.add(`hide`);
  tableView.classList.remove(`hide`);
};


export const closeTable = () => {
  tableView.classList.add(`hide`);
  leftContainer.classList.remove(`hide`);
};