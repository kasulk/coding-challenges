export function runningPace(distance: number, time: string): string {
  const [mins, secs] = time.split(":").map(Number);

  const allSecs = mins * 60 + secs;
  const allSecsPerKm = allSecs / distance;

  const minsPerKm = Math.trunc(allSecsPerKm / 60);
  const secsPerKm = Math.floor(allSecsPerKm % 60);

  return `${minsPerKm}:${secsPerKm.toString().padStart(2, "0")}`;
}
