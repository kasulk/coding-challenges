export function rentalCarCost(d: number): number {
  const costPerDay = 40;
  const total = costPerDay * d;

  if (d >= 7) return total - 50;
  else if (d >= 3) return total - 20;

  return total;
}
