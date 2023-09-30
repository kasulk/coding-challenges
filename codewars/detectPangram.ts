export function isPangram(phrase: string): boolean {
  // convert all letters to lower case
  // remove everything but letters
  // remove doubles (create new set)
  // return if length (or size of set) is 26

  return new Set(phrase.toLowerCase().replace(/[^a-z]/g, "")).size === 26;
}
