export function inArray(a1: string[], a2: string[]): string[] {
  // loop through elements of a1
  // for each element of a1
  // check if its in (each element of) a2
  // if yes, add it to result[]
  // and continue with next iteration of a1
  // after the loop
  // return sorted results

  const result: string[] = [];

  checkSubStrings: for (let subString of a1) {
    for (let string of a2) {
      if (string.includes(subString)) {
        result.push(subString);
        continue checkSubStrings;
      }
    }
  }

  return result.sort();
}
