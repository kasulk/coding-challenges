export function switcheroo(x: string): string {
  // replace all a's with x's
  // replace all b's with a's
  // replace all x's with b's

  return x.replace(/a/g, "x").replace(/b/g, "a").replace(/x/g, "b");
}
