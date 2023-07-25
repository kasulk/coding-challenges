export function catMouse(x: string, j: number): string {
  // if input string doesn't include C, D and m, return 'boring...'
  // if distance between C and m is > j, return 'Escaped'
  // if D is between C and m or m and C, return 'Protected'
  // else return 'Caught'

  const xDotless = x.replace(/[.]/g, "");

  if (!xDotless.split("").sort().join("").includes("CDm"))
    return "boring without all three";

  if (Math.abs(x.indexOf("C") - x.indexOf("m")) > j) return "Escaped!";

  return xDotless.includes("Cm") || xDotless.includes("mC")
    ? "Caught!"
    : "Protected!";
}
