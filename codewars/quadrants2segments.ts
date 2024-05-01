import { Coord } from "./preloaded";

export function quadrantSegment(A: Coord, B: Coord): boolean {
  if (isPositive(A.x, B.x) || isNegative(A.x, B.x)) {
    if (isPositive(A.y, B.y) || isNegative(A.y, B.y)) {
      return false;
    }
  }

  return true;
}

function isPositive(a: number, b: number): boolean {
  return a > 0 && b > 0;
}

function isNegative(a: number, b: number): boolean {
  return a < 0 && b < 0;
}
