export function removeNb(n: number): number[][] {
  let sum = 0;
  let output: [number, number][] = [];

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i * j === sum - i - j) {
        console.log(i, j);
        return (output = [
          [i, j],
          [j, i],
        ]);
      }
    }
  }

  return [];
}
