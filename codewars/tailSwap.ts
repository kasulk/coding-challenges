export function tailSwap(strs: [string, string]): [string, string] {
  // for each element of the input array
  // convert it into an array
  // return the reordered elements as string

  let [arr1, arr2] = strs.map((str) => str.split(":"));

  return [[arr1[0], arr2[1]].join(":"), [arr2[0], arr1[1]].join(":")];
}
