export function jumpingNumber(num: number): string {
  const digits = num.toString().split("").map(Number);

  for (let i = 1; i < digits.length; i++) {
    const currDigit = digits[i];
    const prevDigit = digits[i - 1];

    if (currDigit === prevDigit + 1 || currDigit === prevDigit - 1) {
      continue;
    }

    return "Not!!";
  }

  return "Jumping!!";
}
