
const modalLoad = document.querySelector(`.modal__item`);
const modalDescription = document.querySelector(`.modal__description`);


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