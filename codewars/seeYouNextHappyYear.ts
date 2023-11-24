export function nextHappyYear(year: number): number {
  // loop through years starting at year+1
  // convert the each year into an array of digits
  // create another array of it with only unique digits (= new set)
  // if the length of both arrays is the same
  // quit the loop and return the current year

  while (year) {
    year++;
    const digits = [...year.toString()];
    const uniqueDigits = [...new Set(digits)];

    if (uniqueDigits.length === digits.length) break;
  }

  return year;
}
