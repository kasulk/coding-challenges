export function getMiddle(s: string): string {
  // even: return elements with indeces length/2 - 1 and length/2
  // odd: return element with index round down length/2

  return (
    (s.length % 2 === 0 ? `${s[s.length / 2 - 1]}` : ``) +
    s[Math.floor(s.length / 2)]
  );
}
