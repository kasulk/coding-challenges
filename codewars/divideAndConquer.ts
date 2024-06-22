export function divCon(arr: (string | number)[]): number {
  return arr.reduce(
    (sum: number, num) =>
      typeof num === "number" ? sum + num : sum - Number(num),
    0
  );
}
