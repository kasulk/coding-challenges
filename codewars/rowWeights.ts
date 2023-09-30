export function rowWeights(arr: number[]): [number, number] {
  // create output array
  // loop through input array
  // if elements index is even, add to first output element, else to second
  // return array

  const weightsSums: [number, number] = [0, 0];

  arr.forEach((personWeight, teamIndex) =>
    teamIndex % 2 === 0
      ? (weightsSums[0] += personWeight)
      : (weightsSums[1] += personWeight)
  );

  return weightsSums;
}
