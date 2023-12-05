export function calcType(a: number, b: number, res: number): string {
  if (a + b === res) return "addition";
  if (a - b === res) return "subtraction";
  if (a * b === res) return "multiplication";
  return "division";
}
