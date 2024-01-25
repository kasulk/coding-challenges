export function remove(str: string): string {
  return str.replace(/!/g, "") + "!";
}
