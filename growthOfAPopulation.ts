export const nbYear = (
  p0: number,
  percent: number,
  aug: number,
  p: number
): number => {
  // create yearsCount variable
  // loop through formula while p0 < p
  /// calculate new p0 with formula, round it and
  /// increase value of years varialbe
  // after while loop, return yearsCount

  let yearsCount = 0;

  while (p0 < p) {
    p0 += Math.floor((p0 * percent) / 100 + aug);
    yearsCount++;
  }

  return yearsCount;
};
