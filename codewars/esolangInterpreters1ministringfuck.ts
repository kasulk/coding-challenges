export function myFirstInterpreter(code: string): string {
  let sum = 0;

  return code
    .replace(/[^\.\+]/g, "")
    .split(".")
    .slice(0, -1)
    .map((strOfPluses) => {
      sum += strOfPluses.length;
      sum %= 256;
      return String.fromCharCode(sum);
    })
    .join("");
}
