function getDates(startDate, stopDate) {
  startDate = new Date(startDate);
  stopDate = new Date(stopDate);

  const dateArray = [];
  const currentDate = startDate;
  while (currentDate <= stopDate) {
    const dt = new Date(currentDate);
    dateArray.push(dt);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateArray;
}

function formatDateObject(date, separator) {
  if (!separator) {
    separator = '-';
  }

  const yyyy = date.getFullYear();
  const mm = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${yyyy}${separator}${mm}${separator}${dd}`;
}

export { getDates, formatDateObject };
