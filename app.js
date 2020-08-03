import {getFromGoogleData} from './scripts/get-from-google-data.js';
import {createPersonNames} from './scripts/create-person-names.js';


const URL_G_CSS = `https://script.google.com/macros/s/AKfycbzOgGruy924eOim0YPS7I4VruiRWzKQhNvFh45o3kar1XBdLdo/exec`;

const startDate = document.querySelector(`.start-date`);
const endDate = document.querySelector(`.end-date`);
const buttonStart = document.querySelector(`.button-start`);


const saveStr = {
  cssStat: `cssStatistics`,
};

let cssDB = JSON.parse(localStorage.getItem(saveStr.cssStat)) || [];


// Сохранить в localStorage
const saveDB = (strAddress, bd) => localStorage.setItem(strAddress, JSON.stringify(bd));


// Читаем данные из Гугл
async function getDataFromGoogle(data, url) {
  data = await getFromGoogleData(url);
};

// Проверяем если пустой, загружаем
const checkIsEmpty = (db, url) => {
  if (!db.length) {
    console.log(`Загружаем`);
    getDataFromGoogle(db, url);
    console.log(db);
  }
};


const parseCssDB = () => {
  let arr = [];
  let obj = {};

  for(let item of cssDB) {
    obj.dateInit = item[1];
    obj.dateEnd = item[5];
    obj.personInit = item[2];
    obj.personEnd = item[6];
    obj.status = item[4];
    obj.ball = item[20];

    arr.push(obj);
    obj = {};
  }
  arr.splice(0,1);
  return arr
}








// Возвращаем отфильтрованный массив по промежутку дат регистрации инцидентов
const filtredBetweenDatesReg = (db, a, b) => {
  // Перевести a b в timestamp 
  const startTS = Date.parse(a) + 57599000;
  const endTS = Date.parse(b) + 57599000;
  const start = new Date(startTS);
  const end = new Date(endTS);
  
  
  console.log('start: ', start);
  console.log('end: ', end);
  console.log('startTS: ', startTS);
  console.log('endTS: ', endTS);
  // let ms;
  
  // db.forEach(obj => console.log(Date.parse(obj.dateInit)));

}



checkIsEmpty(cssDB, URL_G_CSS);
// parseCssDB();
cssDB = parseCssDB();

// Создаём массив уникальных Person
let persons = createPersonNames(cssDB);
console.log('persons: ', persons);


buttonStart.addEventListener(`click`, () => {
  const start = startDate.value;
  const end = endDate.value;

  filtredBetweenDatesReg(cssDB, start, end);

});

// Сохраняем в localStorage
// saveDB(saveStr.cssStat, cssDB);

// filtredBetweenDatesReg(cssDB, `2020-07-09`, `2020-07-10`);


// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 8,
//     center: { lat: 52.29778, lng: 104.29639 }
//   });
//   const geocoder = new google.maps.Geocoder();

//   document.getElementById("submit").addEventListener("click", function() {
//     geocodeAddress(geocoder, map);
//   });
// }

// function geocodeAddress(geocoder, resultsMap) {
//   const address = document.getElementById("address").value;
//   geocoder.geocode({ address: address }, function(results, status) {
//     if (status === "OK") {
//       resultsMap.setCenter(results[0].geometry.location);
//       const marker = new google.maps.Marker({
//         map: resultsMap,
//         position: results[0].geometry.location
//       });
//     } else {
//       alert("Geocode was not successful for the following reason: " + status);
//     }
//   });
// }