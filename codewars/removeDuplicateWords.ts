export function removeDuplicateWords(s: string): string {
  // convert input into an array
  // create new Set of this array
  // return array as string

  return Array.from(new Set(s.split(" "))).join(" ");
}
