export function calcType(a: number, b: number, res: number): string | null {
  if (a + b === res) return "addition";
  if (a - b === res) return "subtraction";
  if (a * b === res) return "multiplication";
  if (a / b === res) return "division";
  return null;
}
