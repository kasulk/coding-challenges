function halvingSum(n) {
  let sum = 0;
  let num = n;

  while (num >= 1) {
    sum += num;
    num = Math.trunc(num / 2);
  }

  return sum;
}
