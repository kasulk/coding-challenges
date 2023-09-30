function validParentheses(parenStr) {
  // every open parentheses should be closed at some point
  // loop through array from input string
  // if an element is an openening parentheses,
  /// increase open parentheses count by 1
  // if there is a closing parentheses,
  /// and openParentheses count is > 0
  /// reduce count by 1
  // else return false
  // after the loop
  // if count is 0 return true, else false

  let openCount = 0;

  const parenArr = parenStr.split("");

  for (let element of parenArr) {
    if (element === "(") {
      openCount++;
    } else if (element === ")" && openCount > 0) {
      openCount--;
    } else {
      return false;
    }
  }

  return openCount === 0;
}
