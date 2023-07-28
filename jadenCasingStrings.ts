String.prototype.toJadenCase = function () {
  // turn this string into array of words
  // loop through words and turn every first letter into uppercase
  // append the rest of the word
  // turn result back into string
  // return the result string

  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1, word.length))
    .join(" ");
};

interface String {
  // Declaration needed, don't remove it
  toJadenCase(): string;
}
