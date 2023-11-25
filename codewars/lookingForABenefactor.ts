export function newAvg(donations: number[], newavg: number): number {
  const donationsSum = donations.reduce((sum, donation) => sum + donation, 0);

  if (donationsSum / donations.length + 1 > newavg)
    throw new Error("Expected New Average is too low");

  return Math.ceil((donations.length + 1) * newavg - donationsSum);
}
