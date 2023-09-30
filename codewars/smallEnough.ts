export function smallEnough(a: number[], limit: number): boolean {
  // filter the input array for elements above the limit
  // if resulting array is empty, return true, else false

  return a.filter((number) => number > limit).length === 0;
}
