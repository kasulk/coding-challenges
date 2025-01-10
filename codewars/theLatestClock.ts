export function latestClock(...digits: number[]): string {
  let latest = 0;
  const allClocks = getAllCombinations(digits);

  for (const clock of allClocks) {
    const timestamp = convertClockToTimestamp(clock);
    if (isValidTimestamp(timestamp)) latest = Math.max(latest, timestamp);
  }

  return convertTimestampToClock(latest);
}

function isValidTimestamp(timestamp: number): boolean {
  return !isNaN(timestamp);
}

function convertClockToTimestamp(clock: string): number {
  const date = new Date(`2025-01-01T${clock}`);
  return date.getTime();
}

function convertTimestampToClock(timestamp: number): string {
  const date = new Date(timestamp);
  const hrs = date.getHours().toString().padStart(2, "0");
  const mins = date.getMinutes().toString().padStart(2, "0");
  return `${hrs}:${mins}`;
}

function getAllCombinations(digits: number[]): string[] {
  const results: string[] = [];

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      if (j === i) continue;

      for (let k = 0; k < digits.length; k++) {
        if (k === i || k === j) continue;

        for (let l = 0; l < digits.length; l++) {
          if (l === i || l === j || l === k) continue;

          const hrs = `${digits[i]}${digits[j]}`;
          const mins = `${digits[k]}${digits[l]}`;

          const clock = hrs === "24" ? `00:${mins}` : `${hrs}:${mins}`;
          results.push(clock);
        }
      }
    }
  }

  return results;
}
