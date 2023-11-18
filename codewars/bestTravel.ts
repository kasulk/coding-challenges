export function chooseBestSum(
  maxDistance: number, // t
  maxTowns: number, // k
  distances: number[] // ls
): number | null {
  // loop through each number
  // 7: 1, 3, 6, 10
  // 8: 1, 3, 6, 10, 15
  // 8: 15, 10, 6, 3, 1
  //
  // take the first k-1 numbers and loop through the rest
  // take num 1 and 3 and loop through the rest
  // take num 1 and 4 and loop through the rest
  // indeces
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
  //! finish with 3 loops
  console.log(maxDistance, maxTowns, distances);

  let choice: number[] = [];
  let distance = 0;
  const distanceSums: number[] = [];

  if (distances.length === 1) {
    console.log(null);
    return null;
  }

  for (let i = 0; i < distances.length; i++) {
    // for (let j = 1; j < distances.length; j++) {
    for (let j = i + 1; j < distances.length; j++) {
      //   for (let k = 2; k < distances.length; k++) {
      for (let k = j + 1; k < distances.length; k++) {
        //
        // choice.push()
        choice = [distances[i], distances[j], distances[k]];
        console.log("choice", choice);
        distance = choice.reduce((sum, dist) => sum + dist, 0);
        distanceSums.push(distance);
      }
      console.log("---------------");
    }
  }
  console.log("distancesSums", distanceSums);
  const bla = distanceSums.filter((distSum) => distSum <= maxDistance);

  console.log(Math.max(...bla));
  console.log("=====================");

  return Math.max(...bla);
}
