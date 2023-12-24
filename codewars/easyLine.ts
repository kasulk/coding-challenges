export function easyLine(n: number): number {
  console.log(n);

  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += getBinomialCoefficient(n, i) ** 2;
  }

  return Math.round(Math.log(sum));
}

function factorial(n: number): number {
  return Array(n)
    .fill(0)
    .reduce((prod, _, i) => prod * (i + 1), 1);
}

function getBinomialCoefficient(line: number, index: number): number {
  return factorial(line) / (factorial(index) * factorial(line - index));
}
