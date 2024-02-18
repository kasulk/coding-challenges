export function mazeRunner(maze: number[][], directions: string[]): string {
  let row = 0;
  let col = 0;

  for (let i = 0; i < maze.length; i++) {
    const currRow = maze[i];

    if (currRow.includes(2)) {
      row = i;
      col = currRow.indexOf(2);
      break;
    }
  }

  for (let direction of directions) {
    if (direction === "N") row -= 1;
    if (direction === "S") row += 1;
    if (direction === "W") col -= 1;
    if (direction === "E") col += 1;

    if (!maze[row]) return "Dead";
    if (maze[row][col] === 0) continue;
    if (maze[row][col] === 3) return "Finish";
    if (!maze[row][col] || maze[row][col] === 1) return "Dead";
  }

  return "Lost";
}
