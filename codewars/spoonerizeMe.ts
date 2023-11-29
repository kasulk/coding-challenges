export function spoonerize(words: string): string {
  return words
    .split(" ")
    .map((word, i, arr) =>
      i === 0 ? arr[1][0] + word.slice(1) : arr[0][0] + word.slice(1)
    )
    .join(" ");
}
