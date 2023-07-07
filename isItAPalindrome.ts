export function isPalindrome(x: string): boolean {
  const letters = x.toLowerCase().split("");

  return letters.join("") === letters.reverse().join("");
}
