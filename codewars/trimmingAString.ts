export function trim(str: string, size: number): string {
  if (str.length <= size) return str;

  let newStrLength: number;

  if (size <= 3) newStrLength = size;
  else newStrLength = size - 3;

  return str.slice(0, newStrLength) + "...";
}
