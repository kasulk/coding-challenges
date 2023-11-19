export function chooseBestSum(
  maxDistance: number, // t
  maxTowns: number, // k
  distances: number[] // ls
): number | null {
  // indices
  // 1,2,3
  // 1,2,4
  // 1,2,5
  // 1,3,4
  // 1,3,5
  // 1,4,5
  /// 2,3,4
  /// 2,3,5
  /// 2,4,5
  /// 3,4,5
  //
  //! test first with 3 hardcoded loops
  console.log(maxDistance, maxTowns, distances);

  let choice: number[] = [];
  let distance = 0;
  const distanceSums: number[] = [];

  if (distances.length === 1) {
    // console.log(null);
    // console.log("=====================");
    return null;
  }

  for (let i = 0; i < distances.length; i++) {
    for (let j = i + 1; j < distances.length; j++) {
      for (let k = j + 1; k < distances.length; k++) {
        choice = [distances[i], distances[j], distances[k]];
        // console.log("choice", choice);
        distance = choice.reduce((sum, dist) => sum + dist, 0);
        distanceSums.push(distance);
      }
      //   console.log("-");
    }
  }
  //   console.log("distancesSums", distanceSums);
  const possibleDistances = distanceSums.filter(
    (distSum) => distSum <= maxDistance
  );

  //   console.log(Math.max(...possibleDistances));
  //   console.log("=====================");

  return Math.max(...possibleDistances);
}
