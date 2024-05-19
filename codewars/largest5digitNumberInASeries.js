function solution(digits) {
  let max = 0;

  for (let i = 9; i > 0; i--) {
    for (let j = 0; j < digits.length; j++) {
      const currDigit = Number(digits[j]);

      if (currDigit === i) {
        const str5digits = digits.slice(j, j + 5);

        if (str5digits.length === 5) {
          const num5digits = Number(str5digits);
          if (num5digits > max) max = num5digits;
        }
      }
    }
    if (max) return max;
  }

  return max;
}
