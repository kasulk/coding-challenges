export function decoder(encoded: string, marker: string): string {
  const encodedSplit = encoded.split(marker);
  const oddIndexedStrs = encodedSplit.filter((_, i) => i % 2 !== 0);
  const evenIndexedStrs = encodedSplit.filter((_, i) => i % 2 === 0);

  const oddIndexedStrsReversed = oddIndexedStrs.map((str) =>
    str.split("").reverse().join("")
  );

  return [...evenIndexedStrs, ...oddIndexedStrsReversed.reverse()].join("");
}
