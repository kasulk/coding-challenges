export function hexStringToRGB(hexString: string): {
  r: number;
  g: number;
  b: number;
} {
  const hexPairs: string[] =
    hexString.slice(1).toLowerCase().match(/.{2}/g) || [];
  const decimals: number[] = hexPairs.map((pair) => decimalizeHexPair(pair));

  return Object.fromEntries([
    ...decimals.map((decimal, i) => ["rgb"[i], decimal]),
  ]);
}

function decimalizeHexPair(hexPair: string): number {
  const [first, second] = [...hexPair].map((char) => {
    return "abcdef".includes(char)
      ? Number("abcdef".indexOf(char) + 10)
      : Number(char);
  });
  return first * 16 + second;
}
