export function evaluate(equation: string): number | BigInt | null {
  if (!equation.includes("@")) return BigInt(equation);

  const bigInts: bigint[] = equation.split(" @ ").map(BigInt);
  let stepResult: bigint = 0n;

  while (bigInts.length > 1) {
    const [curr, next] = bigInts.splice(0, 2);

    if (!next) return null;

    stepResult =
      curr + next + (curr - next) + curr * next + (~~(curr / next) || 0n);

    bigInts.unshift(stepResult);
  }

  return stepResult;
}
