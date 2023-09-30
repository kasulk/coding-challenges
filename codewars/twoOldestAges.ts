// return the two oldest/oldest ages within the array of ages passed in.
// it should return the two ages as a sorted array, youngest age first
export function twoOldestAges(ages: number[]): number[] {
  // sort input array
  // return slice from second to last element to the end

  return ages.sort((a, b) => a - b).slice(ages.length - 2);
}
