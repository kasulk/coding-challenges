export function dateNbDays(a0: number, a: number, p: number): string {
  // calculate the interest per day
  // add it to the initial amount
  // until a is reached
  // calculate the end date

  const startDate = new Date("2016-01-01");
  let currAmount = a0;
  let numDays = 0;

  while (currAmount <= a) {
    const dailyInterest = (currAmount * p) / 100 / 360;

    currAmount += dailyInterest;
    numDays++;
  }

  const endDate = startDate.setDate(startDate.getDate() + numDays);

  return new Date(endDate).toISOString().slice(0, 10);
}
