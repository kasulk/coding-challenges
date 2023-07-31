export function nextBigger(n: number): number {
  // split number into array of digits
  // sort array
  //
  //// create all possible combinations and return the one next to the original number
  //
  // first sort the decimals,
  // then the hundreds, then the thousands and so on...

  if (Number(n.toString.split("").sort().join("")) === n) return -1;

  return "bla";
}

// 1234, 1243
// 1324, 1342
// 1432, 2134
// 4-243, 4-342
// 2-371, 2-713

// sort, then put the digit which is the next bigger to the original first one in the first place
/// index +1
// and remove it from the sorted array

// then the smallest, then the next smallest and so on...

// take the last 2 digits
// if the last is larger than the first, switch them
