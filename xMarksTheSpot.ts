export function x(n: number): number[][] {
  const output: number[][] = [];

  // create new line
  for (let i = 0; i < n; i++) {
    const newLine: number[] = [];

    // create new elements
    for (let j = 0; j < n; j++) {
      // if element index equals row index OR n-1 minus row index,
      // insert 1, else 0
      if (j === i || j === n - 1 - i) {
        newLine.push(1);
      } else {
        newLine.push(0);
      }
    }

    output.push(newLine);
  }

  return output;
}
