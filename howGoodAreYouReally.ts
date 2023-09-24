export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  // add up all numbers in the input array plus yourPoints
  // divide the sum by the number of elements in the input array + 1
  // check if the result is < yourPoints

  return (
    yourPoints >
    classPoints.reduce((sum, points) => sum + points, yourPoints) /
      (classPoints.length + 1)
  );
}
