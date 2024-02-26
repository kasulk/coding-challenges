export function toIndustrial(time: number | string): number {
  let hrs: number;
  let mins: number;

  if (typeof time === "string") {
    [hrs, mins] = time.split(":").map(Number);
  } else {
    hrs = 0;
    mins = time;
  }

  mins = mins / 60;
  mins = Number(mins.toFixed(2).padStart(2, "0"));

  return hrs + mins;
}

export function toNormal(time: number): string {
  let hrs = Math.trunc(time);
  let mins = time % 1;

  mins = Math.round(mins * 60);

  if (mins === 60) {
    hrs++;
    mins = 0;
  }

  return `${hrs}:${mins.toString().padStart(2, "0")}`;
}
