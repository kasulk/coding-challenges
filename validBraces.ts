export function validBraces(braces: string): boolean {
  // loop through characters of input string
  // if the brace is opening, push it into a stack array
  // if the brace is closing,
  /// and if the last element of the stack is the corresponding opening brace
  /// pop the opening brace from the stack array
  // else return false
  // after the loop, if the stack is empty, return true

  const braceMap: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const openingBrace = new RegExp(/\(|\[|\{/);
  const closingBrace = new RegExp(/\)|\]|\}/);
  const stack: string[] = [];

  for (let element of braces) {
    if (openingBrace.test(element)) {
      stack.push(element);
      continue;
    }

    if (closingBrace.test(element)) {
      if (stack[stack.length - 1] === braceMap[element]) {
        stack.pop();
        continue;
      }
      return false;
    }
  }

  return !stack.length;
}
