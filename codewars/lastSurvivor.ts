export function lastSurvivor(letters: string, coords: number[]): string {
  // loop through the input array
  // as long as its not empty
  // remove the character in the input string with the index of the first element in the array
  // (only return elements that doesn't have that index)
  // after the loop, return the remaining string

  let lettersArr = letters.split("");

  while (coords.length > 0) {
    const nextIndexToBeRemoved = coords.shift();

    lettersArr = lettersArr.filter((_, i) => i !== nextIndexToBeRemoved);
  }

  return lettersArr.join("");
}
