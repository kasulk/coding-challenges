export function validBraces(braces: string): boolean {
  // create a map object for the opening and corresponding closing braces
  // loop through the input string
  // if a opening brace isn't followed by it's closing brace, store it in an array
  // if a closing brace is found, check the last element in the array, if it is the corresponding opening one
  // if not, return false
  // if yes, go on until the end of the input string
  // return true

  const braceMap: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const openingBraces = ["(", "[", "{"];
  const closingBraces = [")", "]", "}"];

  console.log(braces.split(""));
  // console.log([].pop())

  let openingBraceStack: string[] = [];

  for (let i = 0; i < braces.length; i++) {
    // if element is opening brace
    if (openingBraces.includes(braces[i])) {
      console.log(braces[i]);
      // and the next element isn't the corresponding closing bracket
      if (braces[i + 1] !== braceMap[braces[i]]) {
        // store it in the array
        openingBraceStack.push(braceMap[braces[i]]);
        console.log(openingBraceStack);
      } else {
        // if the next is the closing one
        i++;
      }
    }

    if (closingBraces.includes(braces[i])) {
      // console.log(braces[i], '---', openingBraceStack)
      if (braces[i] !== openingBraceStack.pop()) {
        // console.log('yes')
        return false;
      }
    }
  }

  return openingBraceStack.length === 0;
}

//! "[({})](]" =>  False
// validBraces("()")// => true
validBraces("[({})](]"); // =>  Fals    e
