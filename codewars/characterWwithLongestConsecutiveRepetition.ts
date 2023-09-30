export function longestRepetition(text: string): [string, number] {
  // if text is empty, return early
  // create variables currentLength, maxLength and maxLetter
  // loop through characters
  // if the next character is the same, increase currentLength
  // if the next character is different, and
  // if currentLength is greater than maxLength, assign its value to maxLength
  // and the current Letter to maxLetter

  if (!text) return ["", 0];

  let currentLength = 1;
  let maxLength = 1;
  let maxLetter = text[0];

  for (let i = 0; i < text.length - 1; i++) {
    if (text[i] === text[i + 1]) {
      currentLength++;
    }
    if (text[i] !== text[i + 1] || i === text.length - 2) {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxLetter = text[i];
      }

      currentLength = 1;
    }
  }

  return [maxLetter, maxLength];
}
