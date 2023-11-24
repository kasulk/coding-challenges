export function flyBy(lamps: string, drone: string): string {
  return lamps
    .split("")
    .map((_, i) => (i < drone.length ? "o" : "x"))
    .join("");
}
