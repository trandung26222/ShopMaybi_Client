export function DayString2DayVN(inputDate) {
  const date = inputDate.getDate();
  const month = inputDate.getMonth() + 1;
  const year = inputDate.getFullYear();

  const formattedDate = `${date}/${month}/${year}`;
  return formattedDate;
}
