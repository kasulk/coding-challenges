export function sortVowels(str?: number | string | null): string {
  // for each char of the input string
  // if it is a vowel,
  // add a pipe before it
  // else, add a pipe afterwards
  // after the loop,
  // put a line break between each element

  if (!str || typeof str === "number") return "";

  return str
    .split("")
    .map((char) => (/[aeiou]/i.test(char) ? "|" + char : char + "|"))
    .join("\n");
}
