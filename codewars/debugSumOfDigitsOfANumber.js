function getSumOfDigits(int) {
  return int
    .toString()
    .split("")
    .reduce((sum, num) => sum + Number(num), 0);
}
