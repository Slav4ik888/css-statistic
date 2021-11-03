import processData from './scripts/process-data.js';
import { closeTable } from './scripts/display/toggle-table.js';


// ==========  NODES ========== //

const buttonStart = document.querySelector(`.button-start`);
const refreshIcon = document.querySelector(`.refresh-icon`);


// ======== LISTENERS ======== //

refreshIcon.addEventListener(`click`, closeTable);

// Ожидаем получение данных промежутка дат
buttonStart.addEventListener(`click`, processData);



// git add . && git commit -m "fix calulation for Installations" && git push origin master