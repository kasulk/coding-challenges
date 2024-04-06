export function areaOfPolygonInsideCircle(
  radius: number,
  numSides: number
): number {
  const RADIANT_CIRCLE = 2 * Math.PI;
  const radiantAngle = RADIANT_CIRCLE / numSides;

  const areaTriangle = 0.5 * radius * radius * Math.sin(radiantAngle);
  const areaPolygon = areaTriangle * numSides;

  return parseFloat(areaPolygon.toFixed(3));
}
