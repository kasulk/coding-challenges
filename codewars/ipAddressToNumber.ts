export function ipToNum(ip: string): number {
  const binary32bit = ip
    .split(".")
    .map(Number)
    .map((num) => num.toString(2).padStart(8, "0"))
    .join("");

  return parseInt(binary32bit, 2);
}

export function numToIp(num: number): string {
  const binary32bit = num.toString(2).padStart(32, "0");

  const bytes = ["", "", "", ""].map((_, i) => {
    const byteStart = i * 8;
    const byteEnd = (i + 1) * 8;
    return binary32bit.slice(byteStart, byteEnd);
  });

  const nums = bytes.map((byte) => parseInt(byte, 2));

  return nums.join(".");
}
