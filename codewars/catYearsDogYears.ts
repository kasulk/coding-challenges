export function humanYearsCatYearsDogYears(
  humanYears: number
): [number, number, number] {
  let catYears = 15;
  let dogYears = 15;

  if (humanYears > 1) {
    catYears += 9;
    dogYears += 9;
  }

  if (humanYears > 2) {
    catYears += (humanYears - 2) * 4;
    dogYears += (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
}
