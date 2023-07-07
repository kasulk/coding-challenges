export function duplicateCount(text: string): number {
  // turn input into lowercase
  // sort input
  // take the first character and compare it with the next
  // if it equals the next, count++
  // and go on with the next letter, that isn't the current one
  // if the next letter is the current one go to the next letter
  // if it isn't the same,
  // go on with the next letter
  let totalDuplicate = 0;
  const characters = text.toLocaleLowerCase().split("").sort();

  for (let i = 0; i < characters.length - 1; i++) {
    if (characters[i] === characters[i + 1]) {
      //   if the next char is the same as the last, skip it
      while (characters[i] === characters[i + 1]) {
        i++;
      }
      totalDuplicate++;
    }
  }
  return totalDuplicate;
}
