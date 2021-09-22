const modalLoad = document.querySelector(`.loader`);
const modalDescription = document.querySelector(`.loader_description`);


export const loaderStart = (text) => {
  modalLoad.classList.add(`modal`);
  modalLoad.classList.remove(`hide`);
  modalDescription.textContent = text;
};

export const loaderStop = () => {
  modalLoad.classList.add(`hide`);
  modalLoad.classList.remove(`modal`);
  modalDescription.textContent = ``;
};