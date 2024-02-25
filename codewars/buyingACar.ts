export function nbMonths(
  startPriceOld: number,
  startPriceNew: number,
  savingperMonth: number,
  percentLossByMonth: number
): number[] {
  let currPercentLossByMonth = percentLossByMonth;
  let currPriceDiffCars = startPriceOld - startPriceNew;
  let balance = currPriceDiffCars;
  let numMonths = 0;
  let savings = 0;

  while (balance < 0) {
    savings += savingperMonth;
    numMonths++;

    if (numMonths % 2 === 0) currPercentLossByMonth += 0.5;

    const currPriceLossCars =
      (currPriceDiffCars * currPercentLossByMonth) / 100;
    currPriceDiffCars -= currPriceLossCars;

    balance = currPriceDiffCars + savings;
  }

  return [numMonths, Math.round(balance)];
}
