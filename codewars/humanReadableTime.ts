export function humanReadable(input: number): string {
  // divide input by 3600 to get the hours (before comma)
  // round it and concat it to output string
  // multiply the after comma by 60 to get the mins (before comma)
  // round it and concat it to output string
  // multiply the after comma by 60 to get the secs
  // round it and concat it to output string

  let output = "";
  let restSeconds: number;

  const hours = input / 3600;
  if (Math.floor(hours) < 10) output += "0";
  output += Math.floor(hours) + ":";

  restSeconds = (hours % 1) * 60;

  const mins = Math.floor(restSeconds);
  if (Math.floor(mins) < 10) output += "0";
  output += mins + ":";

  restSeconds = (restSeconds % 1) * 60;

  const secs = Math.round(restSeconds);
  if (Math.floor(secs) < 10) output += "0";
  output += secs;

  return output;
}
