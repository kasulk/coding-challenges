export function movie(card: number, ticket: number, perc: number): number {
  // loop until
  // System A price is greater than System B price rounded down
  // for each loop
  /// increase numVisits by 1
  /// calculate the price for system A
  /// calculate the price for system B
  ///- multiply the initial ticket price by perc to the power of numVisits
  // after the loop, return numVisits

  let sumSystemA = 0;
  let sumSystemB = card;
  let numVisits = 0;

  while (sumSystemA <= Math.ceil(sumSystemB)) {
    numVisits++;
    sumSystemA += ticket;
    sumSystemB += ticket * perc ** numVisits;
  }

  return numVisits;
}
