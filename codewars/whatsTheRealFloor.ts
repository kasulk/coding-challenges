export function getRealFloor(floor: number): number {
  if (floor > 12) return floor - 2;
  if (floor > 0) return floor - 1;
  return floor;
}
