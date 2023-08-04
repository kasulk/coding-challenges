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
  let restSeconds: number;

  //   let hours = seconds / 3600;  if (inputSeconds===0) {const hours = 0}

  let hours = seconds / 3600; //.toString().split(".");
  if (Math.floor(hours) < 10) {
    output += "0";
  }
  output += Math.floor(hours) + ":";

  //   console.log(hours);
  //   console.log(output);

  restSeconds = (hours % 1) * 60;
  // console.log(restSeconds)

  let mins = Math.floor(restSeconds);
  if (Math.floor(mins) < 10) {
    output += "0";
  }
  output += mins + ":";
  restSeconds = (restSeconds % 1) * 60;
  // console.log(restSeconds)

  //   let secs = restSeconds.toFixed();
  let secs = Math.round(restSeconds);
  if (Math.floor(secs) < 10) {
    output += "0";
  }

  output += secs;

  //   return "99:59:59";
  return output;
}

// humanReadable(0);
// humanReadable(86399)
