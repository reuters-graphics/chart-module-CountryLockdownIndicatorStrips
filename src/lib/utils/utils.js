import { timeDay } from 'd3-time';
import { timeFormat, timeParse } from 'd3-time-format';

// function getDates(startDate, stopDate) {
//   startDate = new Date(startDate);
//   stopDate = new Date(stopDate);

//   const dateArray = [];
//   const currentDate = startDate;

//   while (currentDate <= stopDate) {
//     const dt = new Date(currentDate);
//     dateArray.push(dt);
//     currentDate.setDate(currentDate.getDate() + 1);
//   }
//   return dateArray;
// }

// function formatDateObject(date, separator) {
//   if (!separator) {
//     separator = '-';
//   }

//   const yyyy = date.getFullYear();
//   const mm = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
//   const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
//   return `${yyyy}${separator}${mm}${separator}${dd}`;
//

function getDates(startDate, stopDate) {
  const dateParse = timeParse('%Y-%m-%d');
  const dateArray = timeDay.range(dateParse(startDate), dateParse(stopDate), 1);
  return dateArray;
}
function formatDateObject(date, separator) {
  if (!separator) {
    separator = '-';
  }
  return timeFormat(`%Y${separator}%m${separator}%d`)(date);
}
export { getDates, formatDateObject };
