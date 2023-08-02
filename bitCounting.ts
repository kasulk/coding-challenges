export function countBits(number: number): number {
  // divide the input number by 2
  // add the rest to a sum variable
  // store the rounded down result in a variable
  // repeat until the result is 0
  // return the sum of all elements in the array

  let sum = 0;
  let divisionResult = number;

  while (divisionResult > 0) {
    sum += divisionResult % 2;
    divisionResult = Math.floor(divisionResult / 2);
  }

  return sum;
}
