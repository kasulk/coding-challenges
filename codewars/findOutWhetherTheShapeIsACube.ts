export function cubeChecker(volume: number, side: number): boolean {
  return volume > 0 && volume === side ** 3;
}
