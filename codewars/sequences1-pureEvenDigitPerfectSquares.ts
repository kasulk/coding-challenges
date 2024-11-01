export function evenDigitSquares(a: number, b: number): number[] {
  const result: number[] = [];
  const start = Math.sqrt(a);
  const end = Math.sqrt(b);

  outerLoop: for (let i = start; i <= end; i++) {
    if (!isEven(i)) continue;
    const square = i ** 2;
    const digits = digitize(square);

    for (const digit of digits) {
      if (!isEven(digit)) continue outerLoop;
    }

    result.push(square);
  }

  return result;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function digitize(num: number): number[] {
  return num.toString().split("").map(Number);
}
