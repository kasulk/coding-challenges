export function x(n: number): number[][] {
  // create a classic for loop
  // create an array with n-1 elements
  // put a 1 at [n-1] and another 1 at array.length-(n-1)
  // (create another array) as long as n

  const output: number[][] = [];

  // create new line
  for (let i = 0; i < n; i++) {
    console.log("lineNumber", i);
    const newLine: number[] = [];

    // create new elements
    for (let j = 0; j < n; j++) {
      console.log("elementNumber (j):", j);
      console.log("newLine (before):", newLine);
      console.log("------------------");

      // const newElement = 0;

      // only do this until half of the row
      if (j <= n / 2) {
        // if element index equals row index
        if (j === i || j === n - i) {
          newLine.push(1);
        } else {
          newLine.push(0);
        }
      }
      console.log("newLine (after):", newLine);
      output.push(newLine);
      console.log("output:", output);
      // if element has index i or array.length-i, element = 1, else 0
    }
  }

  return output;
}
