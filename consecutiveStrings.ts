export function longestConsec(strs: string[], k: number): string {
  // loop through input array
  // for each element k times
  // store elements value of k number of elements in a sum variable
  // after the concatenation, store each element and its length in an array
  // reset sum variable
  // after the loops
  // sort sums array by the length descending
  // return second element of the first element

  if (!strs.length || k > strs.length || k <= 0) return "";

  let sum = "";
  const sums: [number, string][] = [];

  for (let i = 0; i <= strs.length - k; i++) {
    for (let j = 0; j < k; j++) {
      sum += strs[i + j];
    }
    sums.push([sum.length, sum]);
    sum = "";
  }

  const sortedSums = sums.sort((a, b) => b[0] - a[0]);

  return sortedSums.length ? sortedSums.shift()![1] : "";
}
