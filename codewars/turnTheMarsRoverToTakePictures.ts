type MoveDirection = "left" | "right";
type Direction = "N" | "S" | "E" | "W";

export function turn(current: Direction, target: Direction): MoveDirection {
  const rightTurns = ["NE", "ES", "SW", "WN"];
  const turnFromTo = current + target;

  if (rightTurns.includes(turnFromTo)) return "right";
  return "left";
}
