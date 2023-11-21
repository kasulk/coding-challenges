export function overTheRoad(address: number, n: number): number {
  const sumHouses = n * 2;

  return sumHouses - address + 1;
}
