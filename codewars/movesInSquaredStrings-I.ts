export function vertMirror(str: string): string {
  // reverse each substring in the input string
  return str
    .split("\n")
    .map((substring) => substring.split("").reverse().join(""))
    .join("\n");
}

export function horMirror(str: string): string {
  // reverse the input string (without line breaks)
  return str.split("\n").reverse().join("\n");
}

export function oper(fct: (str: string) => string, str: string): string {
  return fct(str);
}
