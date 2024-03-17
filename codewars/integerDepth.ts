export function computeDepth(num: number): number {
  let allDigits = "0123456789".split("");

  for (let i = 1; ; i++) {
    const value = num * i;
    const valueDigits = [...value.toString()];

    valueDigits.forEach((digit) => {
      allDigits = allDigits.filter((el) => el !== digit);
    });

    if (!allDigits.length) return i;
  }
}
