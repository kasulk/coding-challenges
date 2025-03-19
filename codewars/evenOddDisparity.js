function solve(arr) {
  const nums = arr.filter((el) => Number.isInteger(el));
  return nums.reduce((sum, num) => (num % 2 === 0 ? ++sum : --sum), 0);
}
