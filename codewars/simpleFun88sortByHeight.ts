export function sortByHeight(list: number[]): number[] {
  // remove trees
  // sort the remaining array
  // replace every person by the content of the sorted array

  const sortedPeople = list
    .filter((element) => element > 0)
    .sort((a, b) => a - b);

  return list.map((element) => {
    if (element > 0) return sortedPeople.shift()!;
    return element;
  });
}
