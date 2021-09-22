
export default function calcInstTotal(crs) {
  let result = 0;
  const install = crs.install;

  for (const range in install) {
    if (Object.prototype.hasOwnProperty.call(install, range)) {

      for (const client in install[range]) {
        if (Object.prototype.hasOwnProperty.call(install[range], client)) {

          for (const instType in install[range][client]) {
            if (Object.prototype.hasOwnProperty.call(install[range][client], instType)) {
              // console.log(range + ` - ` + client + ` - ` + instType);
              result += install[range][client][instType].result;
            }
          }
        }
      }
    }
  }

  crs.totalInstall = result;
}