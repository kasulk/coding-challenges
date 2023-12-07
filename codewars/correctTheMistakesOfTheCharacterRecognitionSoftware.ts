export function correct(str: string): string {
  return str
    .split("")
    .map((char) => {
      if (char === "5") return "S";
      if (char === "0") return "O";
      if (char === "1") return "I";
      else return char;
    })
    .join("");
}
