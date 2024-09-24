function insertDash(num) {
  return num
    .toString()
    .split("")
    .map((digit, i, arr) => {
      const nextDigit = arr[i + 1] || 0;
      if (digit % 2 !== 0 && nextDigit % 2 !== 0) return digit + "-";
      return digit;
    })
    .join("");
}
