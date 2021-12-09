
export const getTimeFromFullDate = (date: string) => {
  if (!date) return ``;

  return date.slice(-5)
};

export const getDateFromFullDate = (date: string) => {
  if (!date) return ``;

  const year = date.slice(2, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  return day + `.` + month + `.` + year
};

export default function getDateTime(_date: string) {
  if (!_date) return ``;

  const date = getDateFromFullDate(_date);
  const time = getTimeFromFullDate(_date);

  return (date + ` ` + time).trim();
}

// console.log(`getTimeFromFullDate: `, getTimeFromFullDate(`2021-10-02T10:00`));
// console.log(`getDateFromFullDate: `, getDateFromFullDate(`2021-10-02T10:00`));
