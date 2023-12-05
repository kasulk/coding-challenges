export function circleArea(radius: number): number {
  if (radius <= 0) throw new Error("Duh - radius has to be positive buddy...");

  return Math.PI * radius ** 2;
}
