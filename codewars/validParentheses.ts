export function validParentheses(parenStr: string): boolean {
  let numOpenParentheses = 0;

  for (let char of parenStr) {
    if (char === "(") numOpenParentheses++;
    if (char === ")") numOpenParentheses--;

    if (numOpenParentheses < 0) return false;
  }

  return numOpenParentheses === 0;
}
