export function calc(expr: string): number {
  console.log("expr:", expr);

  const arr = expr.split(" ");
  if (!expr) return 0;
  if (arr.length < 2) return Number(expr);
  console.log(arr);

  //   arr.push(arr.splice(1, 1)[0]);
  //   return eval(arr.join(""));

  while (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      const curr = arr[i];
      console.log("curr:", curr, "\n");

      if (!Number(curr)) {
        const currOperands = arr.splice(i - 2, 2);
        console.log(currOperands);
        const [first, second] = currOperands;
        // const currOperator = curr;
        const currOperator = " " + arr.splice(i - 2, 1)[0] + " ";
        console.log(i, first, currOperator, second, "\n");
        const currResult = eval(first + currOperator + second);
        console.log(arr, currResult, "\n");
        arr.splice(i - 2, 0, currResult);
        break;
      }
    }
  }

  return Number(arr[0]);
}

// calc('1 3 +')
// calc("5 1 2 + 4 * + 3 -");
