export function flip(dir: string, boxes: number[]): number[] {
  const sortedBoxes = [...boxes].sort((a, b) => a - b);

  return dir === "R" ? sortedBoxes : sortedBoxes.reverse();
}
