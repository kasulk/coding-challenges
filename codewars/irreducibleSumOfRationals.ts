export function sumFracts(numsArr: number[][]): string | null {
  if (!numsArr.length) return null;

  const commonDenom = numsArr.reduce(
    (prod, currDenom) => prod * currDenom[1],
    1
  );

  const numer = numsArr.reduce((sum, fraction) => {
    const numer = fraction[0];
    const denom = fraction[1];

    return sum + (commonDenom / denom) * numer;
  }, 0);

  const [simpNumer, simpDenom] = simplifyFraction(numer, commonDenom);

  if (simpNumer % simpDenom === 0) return `${simpNumer / simpDenom}`;
  return `[${simpNumer}, ${simpDenom}]`;
}

function getGcd(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function simplifyFraction(numer: number, denom: number): number[] {
  const gcd = getGcd(numer, denom);
  return [numer / gcd, denom / gcd];
}
