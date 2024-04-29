export function present(present: string, numPasses: number): string {
  if (present === "goodpresent")
    return increaseCharCodesByNum(present, numPasses);
  if (present === "bang")
    return sumUpDecreasedCharCodesByNum(present, numPasses);
  if (present === "badpresent") return "Take this back!";
  if (present === "dog") return `pass out from excitement ${numPasses} times`;
  return present.split("").sort().join("");
}

function increaseCharCodesByNum(str: string, num: number): string {
  return str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + num))
    .join("");
}

function sumUpDecreasedCharCodesByNum(str: string, num: number): string {
  return str
    .split("")
    .map((char) => Number(char.charCodeAt(0) - num))
    .reduce((sum, charCode) => sum + charCode)
    .toString();
}
