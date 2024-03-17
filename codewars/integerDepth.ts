export function computeDepth(num: number): number {
  let digits = [..."0123456789"];

  for (let i = 1; ; i++) {
    const value = num * i;
    const valueDigits = [...value.toString()];

    valueDigits.forEach((valueDigit) => {
      digits = digits.filter((digit) => digit !== valueDigit);
    });

    if (!digits.length) return i;
  }
}
