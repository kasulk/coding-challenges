export function squaresNeeded(grains: number): number {
  let cells = 0;
  let currCellGrainFit = 1;

  while (currCellGrainFit <= grains) {
    currCellGrainFit *= 2;
    cells++;
  }

  return cells;
}
