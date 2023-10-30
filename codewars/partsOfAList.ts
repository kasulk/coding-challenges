export function partlist(arr: string[]): string[][] {
  // as long as there is more than one element in the second array
  // remove the first element from it
  // and add it to another array
  // stringify both arrays and add them as elements to an inner array
  // add this inner array to an outer (output) array
  // return the output array

  const output: string[][] = [];
  let firstElement: string = "";
  let secondElement: string[] = [...arr];

  while (secondElement.length > 1) {
    firstElement = [firstElement, secondElement.shift()!].join(" ").trim();

    const inner: [string, string] = [firstElement, secondElement.join(" ")];

    output.push(inner);
  }

  return output;
}
