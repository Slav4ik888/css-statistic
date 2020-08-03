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
            <th colspan="2">СЕКЦИЯ ТЕХПОДДЕРЖКИ</th>
            <th colspan="2">СЕКЦИЯ ИНСТАЛЛЯЦИЙ</th>
            <th>СЕКЦИЯ ОПЫТНОГО ПРОИЗВОДСТВА</th>
            <th colspan="2">BADCOM</th>
            <th class="t-result"></th>

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
            <th class="t-result">ИТОГО БАЛЛОВ</th>

          </tr>
        </thead>
        
        <tbody class="t-body">
        </tbody>
      </table>
      `);
  tableBody.insertAdjacentElement('beforeend',table);
};


// Рисует строку в таблицу по 1 person
export const renderReaultTableTr = ({
  fioPerson, numberSupportReg, valueSupportForEnd, numberInstallReg, valueInstallForEnd,
  valueExperiencesForEnd, numberBadcomReg, valueBadcomForEnd, result
}) => {
  const tableBody = document.querySelector(`.t-body`);
  const tr = document.createElement('tr');
  tr.insertAdjacentHTML('beforeend', `
          <tr>
            <td>${fioPerson}</td>
            <td>${numberSupportReg}</td>
            <td>${valueSupportForEnd}</td>
            <td class="t-thead-odd">${numberInstallReg}</td>
            <td class="t-thead-odd">${valueInstallForEnd}</td>
            <td>${valueExperiencesForEnd}</td>
            <td class="t-thead-odd">${numberBadcomReg}</td>
            <td class="t-thead-odd">${valueBadcomForEnd}</td>
            <td class="t-result">${result}</td>

          </tr>
  `);
  tableBody.insertAdjacentElement('beforeend',tr);
};