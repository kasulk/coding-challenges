export function myFirstInterpreter(code: string): string {
  let memory = 0;

  return code
    .replace(/[^\.\+]/g, "")
    .split(".")
    .slice(0, -1)
    .map((strOfPluses) => {
      memory += strOfPluses.length;
      memory %= 256;
      return String.fromCharCode(memory);
    })
    .join("");
}
