export function vaporcode(str: string): string {
  return str.replace(/\s/g, "").toUpperCase().split("").join("  ");
}
