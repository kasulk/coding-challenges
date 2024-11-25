export function friend(names: string[]): string[] {
  return names.filter((name) => name.length === 4);
}
