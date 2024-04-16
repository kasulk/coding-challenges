export function maxIntChain(n: number): number {
  const c = Math.ceil(n / 2) - 1;
  const d = Math.trunc(n / 2) + 1;

  return n >= 5 ? c * d : -1;
}
