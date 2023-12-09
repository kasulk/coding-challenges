export function potatoes(p0: number, w0: number, p1: number): number {
  const initialDryMassPercentage = 100 - p0;
  const finalDryMassPercentage = 100 - p1;

  return Math.trunc((initialDryMassPercentage * w0) / finalDryMassPercentage);
}
