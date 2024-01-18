export function binaryFingers(binString: string): string[] {
  const fingers = ["Pinkie", "Ring", "Middle", "Index", "Thumb"];

  return [...binString.padStart(5, "0")]
    .map(Number)
    .reduce<string[]>((acc, curr, i) => {
      if (curr === 1) acc.push(fingers[i]);
      return acc;
    }, []);
}
