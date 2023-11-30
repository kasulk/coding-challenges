export function freqSeq(str: string, sep: string): string {
  // create an object to store all found characters and their number of occurences
  // convert the input string into an array
  // for each element
  // if it doesn't exists as a property on the object
  /// create the property with a value of 0
  /// increase the value by 1
  // after the loop,
  // loop again and replace every character with its value in the object
  // after the loop convert the array

  const chars: string[] = str.split("");
  const counters: { [key: string]: number } = {};

  chars.forEach((char) => {
    if (!counters[char]) counters[char] = 0;
    counters[char]++;
  });

  return chars.map((char) => counters[char]).join(sep);
}
