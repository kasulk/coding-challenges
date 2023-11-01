export const fakeBin = (digitsStr: string): string => {
  return digitsStr
    .split("")
    .reduce((output, digit) => output + (Number(digit) < 5 ? 0 : 1), "");
};
