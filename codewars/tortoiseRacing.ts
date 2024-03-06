export function race(
  v1: number,
  v2: number,
  g: number
): [number, number, number] | null {
  if (v1 >= v2) return null;

  const speedDiff = v2 - v1;
  const durationInHrs = g / speedDiff;
  const durationInSecs = durationInHrs * 3600;

  const hrs = Math.trunc(durationInHrs);
  const mins = Math.trunc(durationInSecs / 60) % 60;
  const secs = Math.trunc(durationInSecs % 60);

  return [hrs, mins, secs];
}
