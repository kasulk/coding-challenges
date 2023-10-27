export function abbrevName(name: string): string {
  const [first, last] = name.toUpperCase().split(" ");

  return `${first[0]}.${last[0]}`;
}
