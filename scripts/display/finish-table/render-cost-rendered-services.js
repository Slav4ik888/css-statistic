
const renderInstallations = (install) => {
  let arr = [];

  for (const range in install) {
    if (Object.prototype.hasOwnProperty.call(install, range)) {

      for (const client in install[range]) {
        if (Object.prototype.hasOwnProperty.call(install[range], client)) {

          for (const instType in install[range][client]) {
            if (Object.prototype.hasOwnProperty.call(install[range][client], instType)) {
              const target = install[range][client][instType];
              const label = target.label;
              const value = target.value;
              const result = target.result;
              const price = target.price;

              const tr = `
                <tr>
                  <td colspan="3" class="t-label">${label}</td>
                  <td>${price}</td>
                  <td colspan="3"></td>
                  <td>${value}</td>
                  <td>${result}</td>
                  <td class="t-result"></td>
                </tr>
              `;

              arr.push(tr);
            }
          }
        }
      }
    }
  }

  return arr;
};



export const renderCostRenderedServices = (crs) => {
  const tableBody = document.querySelector(`.t-body`);
  const th = document.createElement('tr');
  th.classList.add(`main-head`);
  th.insertAdjacentHTML('beforeend', `
            <td colspan="10">${`Сумма оказанных услуг`.toUpperCase()}</td>
          `);
  tableBody.insertAdjacentElement('beforeend',th);

  const header = `
    <tr class="t-head">
      <th colspan="3">Наименование</th>
      <th>Стоимость</th>
      <th colspan="3"></th>
      <th>Количество оказанных</th>
      <th class="t-thead-odd">Сумма оказанных</th>
      <th class="t-result">Итоги</th>
    </tr>
  `;
  tableBody.insertAdjacentHTML('beforeEnd', header);

  const arr = renderInstallations(crs.install);
  arr.forEach(tr => tableBody.insertAdjacentHTML('beforeEnd', tr));
};