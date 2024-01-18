export function checkParity(parity: string, binary: string): number {
  const isBinaryEven = binary.replace(/0/g, "").length % 2 === 0;

  if (isBinaryEven && parity === "even") return 0;
  if (!isBinaryEven && parity === "odd") return 0;

  return 1;
}
