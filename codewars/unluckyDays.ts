export function unluckyDays(year: number): number {
  // loop through every month and
  // check if the 13th is a friday, i.e. 5
  // return the number of 5's

  return Array(12)
    .fill("month")
    .map((_, i) => new Date(`${year}-${i + 1}-13`).getDay())
    .filter((weekdayNum) => weekdayNum === 5).length;
}

unluckyDays(2023);
