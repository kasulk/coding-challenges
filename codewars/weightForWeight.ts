export function orderWeight(str: string): string {
  if (!str) return "";

  // remove whitespaces from end and beginning
  // turn input string into array (of strings)
  const arr: string[] = str.trim().split(" ");

  // create map object...
  let numMap: { [key: string]: number } = {};

  // ...with the array elements as keys and the sum of the digits as values
  for (let element of arr) {
    numMap[element] = element
      .split("")
      .map(Number)
      .reduce((acc, curr) => acc + curr);
  }

  let arrToSort: [string, number][] = [];

  // convert every element of the initial array into an array of the number and the sum of its digits
  for (let element of arr) {
    arrToSort.push([element, numMap[element]]);
  }

  // sort the numbers, first by the sum of their digits (index 1)
  /// then (if they are equal, i.e. 0) by their string version (index 0)
  const sortedArray = arrToSort.sort((a, b) => {
    const sortBySecondElement = a[1] - b[1];
    return sortBySecondElement === 0
      ? a[0].localeCompare(b[0])
      : sortBySecondElement;
  });

  // remove the sums of the digits and return just the sorted numbers
  return sortedArray.map((element) => element[0]).join(" ");
}
