const fixParentheses = (str) => {
  // loop through characters of the input string
  // if it is an opening paren, increase unclosed count by 1
  // if it is a closing paren, and the unclosed counter is 0,
  /// increase unopened count by 1
  // if the paren is closing, and the unclosed counter is > 0,
  /// reduce unclosed counter by 1
  // after the loop,
  /// append as many closing parens as the value of the unclosed counter is and
  /// prepend as many opening parens as the value of the unopened counter is

  let unclosedCount = 0;
  let unopenedCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      unclosedCount++;
      continue;
    }

    if (!unclosedCount) {
      unopenedCount++;
      continue;
    }

    unclosedCount--;
  }

  return "(".repeat(unopenedCount) + str + ")".repeat(unclosedCount);
};
