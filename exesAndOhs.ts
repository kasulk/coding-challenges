export function xo(str: string): boolean {
  // turn input string into lower case array and loop through it
  // for every o increase a counter, for every x increase another counter
  // compare the counters

  const arr: string[] = str.toLowerCase().split("");
  let xCount = 0;
  let oCount = 0;

  for (let char of arr) {
    if (char === "x") xCount++;
    if (char === "o") oCount++;
  }

  return xCount === oCount;
}
