export function findDifference(
  a: [number, number, number],
  b: [number, number, number]
): number {
  return Math.abs(calcVolume(a) - calcVolume(b));
}

export function calcVolume(cuboid: [number, number, number]): number {
  return cuboid.reduce((prod, edge) => prod * edge, 1);
}
