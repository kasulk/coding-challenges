export function checkLogs(log: string[]): number {
  if (!log.length) return 0;

  let numDays = 1;

  for (let i = 0; i < log.length; i++) {
    const last = log[i - 1];
    const curr = log[i];

    if (!last) continue;
    if (hmsToSecs(curr) <= hmsToSecs(last)) numDays++;
  }

  return numDays;
}

function hmsToSecs(hhmmss: string): number {
  const [hh, mm, ss] = hhmmss.split(":").map(Number);
  return ss + mm * 60 + hh * 3600;
}
