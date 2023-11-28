export function cockroachSpeed(kmh: number): number {
  return Math.floor((kmh * 1000) / 36);
}
