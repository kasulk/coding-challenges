export function manhattanDistance(
  pointA: [number, number],
  pointB: [number, number]
): number {
  const diffX = Math.abs(pointA[0] - pointB[0]);
  const diffY = Math.abs(pointA[1] - pointB[1]);

  return diffX + diffY;
}
