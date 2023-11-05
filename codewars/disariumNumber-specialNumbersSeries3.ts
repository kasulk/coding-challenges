export function disariumNumber(num: number): string {
  return num ===
    num
      .toString()
      .split("")
      .reduce(
        (poweredSum, digit, i) => poweredSum + Math.pow(Number(digit), i + 1),
        0
      )
    ? "Disarium !!"
    : "Not !!";
}
