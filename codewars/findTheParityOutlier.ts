export function findOutlier(integers: number[]): number {
  // for each element of the array check if its even or odd (%)
  // save the even ones in an oddNums array
  // save the odd ones in a evenNums array
  // stop if one arrays length is 2 and the others length is 1
  // return the the value of the shorter array

  const evenNums: number[] = [];
  const oddNums: number[] = [];

  while (
    (evenNums.length < 2 && oddNums.length < 1) ||
    (evenNums.length < 1 && oddNums.length < 2)
  ) {
    for (let element of integers) {
      if (element % 2 !== 0) {
        oddNums.push(element);
      } else {
        evenNums.push(element);
      }
    }
  }
  return evenNums.length > oddNums.length ? oddNums[0] : evenNums[0];
}
