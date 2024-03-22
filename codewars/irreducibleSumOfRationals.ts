export function sumFracts(fractions: number[][]): string | null {
  if (!fractions.length) return null;

  const commonDenom = fractions.reduce(
    (prod, fraction) => prod * fraction[1],
    1
  );

  const numer = fractions.reduce((sum, fraction) => {
    const currNumer = fraction[0];
    const currDenom = fraction[1];
    return sum + (commonDenom / currDenom) * currNumer;
  }, 0);

  const [simpNumer, simpDenom] = simplifyFraction(numer, commonDenom);

  if (simpNumer % simpDenom === 0) return `${simpNumer / simpDenom}`;
  return `[${simpNumer}, ${simpDenom}]`;
}

function simplifyFraction(numer: number, denom: number): number[] {
  const gcd = getGcd(numer, denom);
  return [numer / gcd, denom / gcd];
}

function getGcd(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
