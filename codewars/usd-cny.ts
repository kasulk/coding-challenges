export function usdcny(usd: number): string {
  const yuan = (usd * 6.75).toFixed(2);

  return `${yuan} Chinese Yuan`;
}
