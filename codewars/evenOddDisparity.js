function solve(arr) {
  return arr
    .filter((el) => Number.isInteger(el))
    .reduce((sum, num) => (num % 2 === 0 ? ++sum : --sum), 0);
}
