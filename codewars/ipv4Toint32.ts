export function ipToInt32(ip: string): number {
  const binary32bit = ip
    .split(".")
    .map(Number)
    .map((num) => num.toString(2).padStart(8, "0"))
    .join("");

  return parseInt(binary32bit, 2);
}
