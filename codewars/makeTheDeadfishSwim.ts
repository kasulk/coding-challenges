/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  // loop through characters of input string
  // if one of the 4 letters with a command appears, excecute the command
  // return the output array

  const output: number[] = [];
  let memory = 0;

  for (let char of data) {
    if (char === "i") {
      memory++;
      continue;
    }
    if (char === "d") {
      memory--;
      continue;
    }
    if (char === "s") {
      memory *= memory;
      continue;
    }
    if (char === "o") {
      output.push(memory);
      continue;
    }
  }

  return output;
}
