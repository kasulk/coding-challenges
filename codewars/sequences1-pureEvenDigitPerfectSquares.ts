export function evenDigitSquares(a: number, b: number): number[] {
  const sequence: number[] = [];
  const start = Math.sqrt(a);
  const end = Math.sqrt(b);

  loopRoots: for (let i = start; i <= end; i++) {
    if (!isEven(i)) continue;
    const square = i ** 2;
    const digits = square.toString().split("").map(Number);

    for (const digit of digits) {
      if (!isEven(digit)) continue loopRoots;
    }

    sequence.push(square);
  }

  return sequence;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}
