export function between(a: number, b: number): number[] {
  const numsBetween: number[] = [];

  for (let i = a; i <= b; i++) {
    numsBetween.push(i);
  }

  return numsBetween;
}
