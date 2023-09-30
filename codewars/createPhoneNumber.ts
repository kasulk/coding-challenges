export function createPhoneNumber(numbers: number[]): string {
  // map through input array, return each element
  // before element with index 0 add '('
  // after element with index 2 add ') '
  // after element with index 5 add '-'
  // add '(' at the first position
  // turn output into string

  return numbers
    .map((number, index) => {
      if (index === 0) return "(" + number;
      if (index === 2) return number + ") ";
      if (index === 5) return number + "-";

      return number;
    })
    .join("");
}
