var findDigit = function (num, nth) {
  if (nth <= 0) return -1;

  const revDigits = Math.abs(num).toString().split("").reverse();
  const revNthDigit = Number(revDigits[nth - 1]);

  return revNthDigit || 0;
};
