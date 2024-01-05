export function spinningRings(innerMax: number, outerMax: number): number {
  let outer = 0;
  let inner = 0;

  for (let i = 1; ; i++) {
    outer = (outer + 1) % (outerMax + 1);
    inner--;

    if (inner < 0) inner = innerMax;

    if (inner === outer) return i;
  }
}
