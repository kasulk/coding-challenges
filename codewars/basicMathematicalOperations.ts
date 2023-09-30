export function basicOp(
  operation: string,
  a: number,
  b: number
): number | undefined {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}
