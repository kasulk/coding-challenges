export function areYouPlayingBanjo(name: string): string {
  return `${name} ${
    name[0].toUpperCase() === "R" ? "plays" : "does not play"
  } banjo`;
}
