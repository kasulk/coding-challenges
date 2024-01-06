export function choreAssignment(chores: number[]): number[] {
  // sort input array
  // loop through half of the array
  // add the smallest number to the biggest

  const sortedChores = chores.sort((a, b) => a - b);
  const workloads: number[] = [];

  for (let i = 0; i < chores.length / 2; i++) {
    const shortChore = sortedChores[i];
    const longChore = sortedChores[sortedChores.length - 1 - i];

    const currWorkload = shortChore + longChore;

    workloads.push(currWorkload);
  }

  return workloads.sort((a, b) => a - b);
}
