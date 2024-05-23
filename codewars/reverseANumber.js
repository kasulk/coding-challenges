function reverseNumber(num) {
  const reversedNum = Math.abs(num).toString().split("").reverse().join("");

  return num < 0 ? reversedNum * -1 : reversedNum * 1;
}
