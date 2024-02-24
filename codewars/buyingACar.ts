export function nbMonths(
  startPriceOld: number,
  startPriceNew: number,
  savingperMonth: number,
  percentLossByMonth: number
): number[] {
  let currPercentLossByMonth = percentLossByMonth;
  let currPriceDiffCars = startPriceOld - startPriceNew;
  let moneyNeeded = currPriceDiffCars;
  let numMonths = 0;
  let savings = 0;

  while (moneyNeeded < 0) {
    savings += savingperMonth;
    numMonths++;

    if (numMonths % 2 === 0) currPercentLossByMonth += 0.5;

    const currPriceLossCars =
      (currPriceDiffCars * currPercentLossByMonth) / 100;
    currPriceDiffCars -= currPriceLossCars;

    moneyNeeded = currPriceDiffCars + savings;
  }

  return [numMonths, Math.round(moneyNeeded)];
}
