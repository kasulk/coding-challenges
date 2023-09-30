export function findShort(s: string): number {
  // initialize variable for shortest word with infinity
  // convert input string into array of words
  // loop through words
  // if current words length is smaller than the stored value,
  /// replace value of the variable with the new length
  // return value in shortest word variable

  let shortestWordLength = Infinity;
  const words = s.split(" ");

  for (let word of words) {
    if (word.length < shortestWordLength) {
      shortestWordLength = word.length;
    }
  }

  return shortestWordLength;
}
