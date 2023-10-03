export function reverseWords(words: string): string {
  return words
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}
