export function areaOfPolygonInsideCircle(
  radius: number,
  numSides: number
): number {
  // cut polygon into triangles
  // calc area for each triangle

  const RADIANT_CIRCLE = 2 * Math.PI; // all angles
  const radiantAngle = RADIANT_CIRCLE / numSides; // each angle

  const areaTriangle = 0.5 * radius * radius * Math.sin(radiantAngle);
  const areaPolygon = areaTriangle * numSides;

  return parseFloat(areaPolygon.toFixed(3));
}
