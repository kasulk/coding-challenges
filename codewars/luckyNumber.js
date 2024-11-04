function isLucky(num) {
  const digitsSum = num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + digit, 0);

  return !digitsSum || digitsSum % 9 === 0;
}
