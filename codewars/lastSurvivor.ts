export function lastSurvivor(letters: string, coords: number[]): string {
  // loop through the input array
  // as long as its not empty
  // remove the character in the input string with the index of the first element in the array
  // (only return elements that doesn't have that index)
  // after the loop, return the remaining string

  let lettersArr = letters.split("");
  const remainingCoords = [...coords];

  while (remainingCoords.length) {
    const nextIndexToBeRemoved = remainingCoords.shift();

    lettersArr = lettersArr.filter((_, i) => i !== nextIndexToBeRemoved);
  }

  return lettersArr.join("");
}
