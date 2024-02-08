export function findNb(m: number): number {
  // n = 2 => 9 => 3^2
  // n = 3 => 36 => 6^2
  // n = 4 => 100 => 10^2
  // n = 5 => 225 => 15^2
  // n = 6 => 441 => 21^2
  // ...

  let temp = Math.sqrt(m);
  let i = 0;

  while (temp > 0) {
    i++;
    temp -= i;
  }

  return temp >= 0 ? i : -1;
}
