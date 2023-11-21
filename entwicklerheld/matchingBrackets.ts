/**
 * Check if the given string has valid matching brackets
 * @param str string to check
 */
export const isPaired = (input: string): boolean => {
  // create a bracket map and a stack array
  // loop through the input string
  // if the current character is not a bracket, skip it
  // if the current character is an openening bracket,
  /// add it to the end of the stack
  // else remove the last element of the stack
  /// and check it against its corresponding bracket in the map
  /// if its not matching, return false
  // after the loop, if the stack is empty, return true, else false

  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack: string[] = [];

  for (let char of input) {
    if (!/[\(\[\{\)\]\}]/.test(char)) continue;

    if (/[\(\[\{]/.test(char)) {
      stack.push(char);
      continue;
    }

    if (stack.pop() !== map[char]) return false;
  }

  return !stack.length;
};
