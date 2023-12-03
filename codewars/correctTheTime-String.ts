export function timeCorrect(timeString: string | null): string | null {
  // convert the input string into array
  // from the seconds,
  // if its greater 59,
  // subtract 60, and add 1 to the minutes
  // do the same for the minutes/hours
  // from the hours
  // if its greater 23
  // subtract 24

  if (!timeString) return timeString;
  if (!/\d\d:\d\d:\d\d/.test(timeString)) return null;

  const timeArray = timeString.split(":").map(Number);

  timeArray[1] += Math.trunc(timeArray[2] / 60);
  timeArray[0] += Math.trunc(timeArray[1] / 60);

  timeArray[2] = timeArray[2] % 60;
  timeArray[1] = timeArray[1] % 60;
  timeArray[0] = timeArray[0] % 24;

  return timeArray.map((element) => String(element).padStart(2, "0")).join(":");
}
