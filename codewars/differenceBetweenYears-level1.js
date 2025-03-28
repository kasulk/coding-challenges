function howManyYears(date1, date2) {
  const year1 = Number(date1.slice(0, 4));
  const year2 = Number(date2.slice(0, 4));
  return Math.abs(year1 - year2);
}
