
export const showInfo = (info, type) => {
  const infoContainer = document.querySelector(`.info-container`);
  const infoTitle = document.querySelector(`.info-title`);
  const infoContent = document.querySelector(`.info-content`);
  const infoDescription = document.querySelector(`.info-description`);
  const infoCloseIcon = document.querySelector(`.info-close-icon`);
  
  infoContainer.classList.remove(`hide`);
  infoTitle.textContent = type;
  infoDescription.textContent = info;


  infoCloseIcon.addEventListener(`click`, () => infoContainer.classList.add(`hide`));
  console.log(info);
};


export const showError = (info) => showInfo(info, `error`);
