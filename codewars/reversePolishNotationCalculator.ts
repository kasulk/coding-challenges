export function calc(expr: string): number {
  const arr = expr.split(" ");

  while (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      if (!Number(arr[i])) {
        const [first, second, operator] = arr.splice(i - 2, 3);
        const currResult = eval(`${first} ${operator} ${second}`);
        arr.splice(i - 2, 0, currResult);
        break;
      }
    }
  }

  return Number(arr[0]);
}
