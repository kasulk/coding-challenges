export function removeNb(n: number): number[][] {
  //
  let sum = (n * (n + 1)) / 2;
  let output: [number, number][] = [];

  //   for (let i = 1; i <= n; i++) {
  //     sum += i;
  //   }

  for (let i = n; i >= 1; i--) {
    for (let j = n; j >= 1; j--) {
      if (i * j === sum - i - j) {
        // console.log(i, j);
        return (output = [
          [j, i],
          [i, j],
        ]);
      }
    }
  }

  return [];
}
