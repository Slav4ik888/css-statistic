// Render TableHead
export const renderReaultTableHead = () => {
  const tableBody = document.querySelector(`.result-table`);
  tableBody.textContent = ``;
  
  const table = document.createElement(`div`);
  table.insertAdjacentHTML('beforeend', `
      <div class="capt">Статистика из файлов техподдержки Да-Телеком и Badcom</div>
      <table class="table">
        <thead>
          <tr class="main-head">
            <th></th>
            <th colspan="2">ТЕХПОДДЕРЖКА<br/> ДА-ТЕЛЕКОМ</th>
            <th colspan="2">ИНСТАЛЛЯЦИЯ<br/> ДА-ТЕЛЕКОМ</th>
            <th>ОПЫТНОЕ<br/> ПРОИЗВОДСТВО</th>
            <th colspan="2">BADCOM</th>
            <th rowspan="2" class="t-result">ИТОГО БАЛЛОВ</th>

          </tr>
          <tr class="t-head">
            <th>ФИО</th>
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
export const renderReaultTableEmptyTr = () => {
  const tableBody = document.querySelector(`.t-body`);
  const tr = document.createElement('tr');
  tr.insertAdjacentHTML('beforeend', `<td colspan="9"></td>`);
  tableBody.insertAdjacentElement('beforeend',tr);
};

// Рисует строку в таблицу по 1 person
export const renderReaultTableTr = ({
  fioPerson, numberSupportReg, valueSupportForEnd, numberInstallReg, valueInstallForEnd,
  valueExperiencesForEnd, numberBadcomReg, valueBadcomForEnd, result
}) => {
  const tableBody = document.querySelector(`.t-body`);
  const tr = document.createElement('tr');
  tr.insertAdjacentHTML('beforeend', `
            <td>${fioPerson}</td>
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


// Render Table для ТД
export const renderReaultTableTechDir = (cssBalls, BcBalls) => {
  const tableBody = document.querySelector(`.t-body`);
  const th = document.createElement('tr');
  th.classList.add(`main-head`);
  th.insertAdjacentHTML('beforeend', `
            <td></td>
            <td colspan="2">ДА-ТЕЛЕКОМ</td>
            <td colspan="3"></td>
            <td colspan="2">BADCOM</td>
            <td rowspan="2" class="t-result"></td>
          `);
  tableBody.insertAdjacentElement('beforeend',th);

  const tr = document.createElement('tr');
  tr.insertAdjacentHTML('beforeend', `
            <td>Колесов А.В.</td>
            <td colspan="2">${cssBalls}</td>
            <td colspan="3"></td>
            <td colspan="2" class="t-thead-odd">${BcBalls}</td>
  `);
  tableBody.insertAdjacentElement('beforeend',tr);
};
