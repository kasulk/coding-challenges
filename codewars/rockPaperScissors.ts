export function rps(p1: string, p2: string): string {
  if (p1 === p2) return "Draw!";

  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper")
  )
    return "Player 1 won!";

  return "Player 2 won!";
}
