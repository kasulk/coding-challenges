export function arrayDiff(a: number[], b: number[]): number[] {
  // filter list a
  // for every element in list a
  // if list b includes this element, remove it from a
  // return modified list

  return a.filter((element) => !b.includes(element));
}
