type Move = "down" | "up" | "right" | "left";

export function streetFighterSelection(
  fighters: string[][],
  position: number[],
  moves: Move[]
): string[] {
  // if the cursor moves up, subtract 1 from the first element of the position array
  // if the cursor moves down, add 1 to the first element of the position array
  // the first element can only be 0 or 1
  // same in direction, but after 5 comes 0 again
  // and before 0 is 5

  let [y, x] = position;

  return moves.map((move) => {
    if (move === "up" && y === 1) y -= 1;
    if (move === "down" && y === 0) y += 1;
    if (move === "right") x = (x + 1) % 6;
    if (move === "left") {
      if (x === 0) x = 6;
      x = (x - 1) % 6;
    }

    return fighters[y][x];
  });
}
