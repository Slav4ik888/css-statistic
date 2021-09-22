// Render TableHead
export const renderResultTableHead = () => {
  const tableBody = document.querySelector(`.result-table`);
  tableBody.textContent = ``;
  
  const table = document.createElement(`div`);
  table.insertAdjacentHTML('beforeend', `
      <div class="capt">Статистика из файлов техподдержки Да-Телеком и Badcom</div>
      <table class="table">
        <thead>
          <tr class="main-head">
            <th colspan="2"></th>
            <th colspan="2">ТЕХПОДДЕРЖКА<br/> ДА-ТЕЛЕКОМ</th>
            <th colspan="2">ИНСТАЛЛЯЦИЯ<br/> ДА-ТЕЛЕКОМ</th>
            <th>ОПЫТНОЕ<br/> ПРОИЗВОДСТВО</th>
            <th colspan="2">BADCOM</th>
            <th rowspan="2" class="t-result">ИТОГО БАЛЛОВ</th>

          </tr>
          <tr class="t-head">
            <th colspan="2">ФИО</th>
            <th>КОЛ-ВО принятых и оформленных инцидентов</th>
            <th>БАЛЛЫ за завершённые инциденты</th>
            <th class="t-thead-odd">КОЛ-ВО принятых и оформленных инцидентов</th>
            <th class="t-thead-odd">БАЛЛЫ за завершённые инциденты</th>
            <th>БАЛЛЫ за завершённые задачи</th>
            <th class="t-thead-odd">КОЛ-ВО принятых и оформленных инцидентов</th>
            <th class="t-thead-odd">БАЛЛЫ за завершённые инциденты</th>

          </tr>
        </thead>
        
        <tbody class="t-body">
        </tbody>
      </table>
      `);
  tableBody.insertAdjacentElement('beforeend',table);
};


// Рисует пустую строку в таблицу 
export const renderResultTableEmptyTr = () => {
  const tableBody = document.querySelector(`.t-body`);
  const tr = document.createElement('tr');
  tr.insertAdjacentHTML('beforeend', `<td colspan="10"></td>`);
  tableBody.insertAdjacentElement('beforeend',tr);
};


// Рисует строку в таблицу по 1 person
export const renderResultTableTr = ({
  fioPerson, numberSupportReg, valueSupportForEnd, numberInstallReg, valueInstallForEnd,
  valueExperiencesForEnd, numberBadcomReg, valueBadcomForEnd, result
}) => {
  const tableBody = document.querySelector(`.t-body`);
  const tr = document.createElement('tr');
  tr.insertAdjacentHTML('beforeend', `
            <td colspan="2" class="t-label">${fioPerson}</td>
            <td>${numberSupportReg}</td>
            <td>${valueSupportForEnd}</td>
            <td class="t-thead-odd">${numberInstallReg}</td>
            <td class="t-thead-odd">${valueInstallForEnd}</td>
            <td>${valueExperiencesForEnd}</td>
            <td class="t-thead-odd">${numberBadcomReg}</td>
            <td class="t-thead-odd">${valueBadcomForEnd}</td>
            <td class="t-result">${result}</td>
  `);
  tableBody.insertAdjacentElement('beforeend',tr);
};


// Кол-во инцидентов находящихся в работе (отриц.) (Горбунов) -1 день
export const renderResultTableIncInWork = (value) => {
  const tableBody = document.querySelector(`.t-body`);
  const th = document.createElement('tr');
  th.classList.add(`main-head`);
  th.insertAdjacentHTML('beforeend', `
            <td colspan="10">${`Кол-во инцидентов находящихся в работе (отриц.) - минус 1 день`.toUpperCase()}</td>
          `);
  tableBody.insertAdjacentElement('beforeend',th);

  const tr = document.createElement('tr');
  tr.insertAdjacentHTML('beforeend', `
            <td colspan="9" class="t-label">Горбунов К.</td>
            <td class="t-result">${value}</td>
  `);
  tableBody.insertAdjacentElement('beforeend',tr);
};





// Render Table для ТД
export const renderResultTableTechDir = (cssBalls, BcBalls) => {
  const tableBody = document.querySelector(`.t-body`);
  const th = document.createElement('tr');
  th.classList.add(`main-head`);
  th.insertAdjacentHTML('beforeend', `
            <td colspan="2"></td>
            <td colspan="2">ДА-ТЕЛЕКОМ</td>
            <td colspan="3"></td>
            <td colspan="2">BADCOM</td>
            <td rowspan="2" class="t-result"></td>
          `);
  tableBody.insertAdjacentElement('beforeend',th);

  const tr = document.createElement('tr');
  tr.insertAdjacentHTML('beforeend', `
            <td colspan="2" class="t-label">Колесов А.В.</td>
            <td colspan="2">${cssBalls}</td>
            <td colspan="3"></td>
            <td colspan="2" class="t-thead-odd">${BcBalls}</td>
  `);
  tableBody.insertAdjacentElement('beforeend',tr);
};

// Кол-во завершённых инцидентов всего
// Кол-во инсталляций 
export const renderResultTableAllCountsTech = (All, Istall) => {
  const tableBody = document.querySelector(`.t-body`);
  const th = document.createElement('tr');
  th.classList.add(`main-head`);
  th.insertAdjacentHTML('beforeend', `
            <td colspan="10">ИТОГОВЫЕ ЗНАЧЕНИЯ ПО ТЕХПОДДЕРЖКЕ</td>
          `);
  tableBody.insertAdjacentElement('beforeend',th);

  const tr1 = document.createElement('tr');
  tr1.insertAdjacentHTML('beforeend', `
            <td colspan="9" class="t-label">Кол-во завершённых инцидентов</td>
            <td class="t-result">${All}</td>
  `);
  tableBody.insertAdjacentElement('beforeend',tr1);

  const tr2 = document.createElement('tr');
  tr2.insertAdjacentHTML('beforeend', `
            <td colspan="9" class="t-label">Кол-во завершённых инсталляций</td>
            <td class="t-result">${Istall}</td>
  `);
  tableBody.insertAdjacentElement('beforeend',tr2);
};