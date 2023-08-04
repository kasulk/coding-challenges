export function humanReadable(seconds: number): string {
  // 86399; 23:59:59
  // durch 60 = mins; durch 60 = stds.
  //
  // divide by 3600 to get the hours (before comma)
  // subtract the before comma
  // multiply the after comma by 60 to get the mins (before comma)
  // subtract the before comma
  // multiply the after comma by 60 to get the secs

  let output = "";

  //   let hours = seconds / 3600;  if (inputSeconds===0) {const hours = 0}

  let hours = (seconds / 3600).toString().split(".");
  if (Number(hours[0]) < 10) output += "0";
  output += hours[0] + ":";

  //   let restSeconds = hours % 1;
  hours[1] = "." + hours[1];
  let mins = (Number(hours[1]) * 60).toString().split(".");
  if (Number(mins[0]) < 10) output += "0";
  output += mins[0] + ":";

  mins[1] = "." + mins[1];
  //   restSeconds = mins % 1;
  let secs = (Number(mins[1]) * 60).toString().split(".");
  if (Number(secs[0]) < 10) output += "0";
  output += secs[0];

  //   return "99:59:59";
  return output;
}
