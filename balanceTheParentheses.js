const fixParentheses = (str) => {
  // loop through elements of the input string
  // if the paren is opening, increase unclosed count by 1
  // if the paren is closing, and the unclosed counter is 0,
  /// increase unopened count by 1
  //// prepend opening paren
  // if the paren is closing, and the unclosed counter is > 0,
  /// reduce unclosed counter by 1
  // at the end, append as many closing parens as the value of the unclosed counter is
  // and prepend as many opening parens as the value of the unopened counter is
  console.log(str);

  let unclosedCount,
    unopenedCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      unclosedCount++;
    } else if (str[i] === ")") {
      if (!unclosedCount) {
        unopenedCount++;
      } else {
        unclosedCount--;
      }
    }
  }

  return "(".repeat(unopenedCount) + str + ")".repeat(unclosedCount);
};

//? Input: "(()("
//..........1212
// Input: "))))(()("

// count unclosed
// count unopened
