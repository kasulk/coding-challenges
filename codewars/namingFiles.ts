export function nameFile(
  template: string,
  numFiles: number,
  start: number
): string[] {
  if (numFiles <= 0) return [];
  if (!Number.isInteger(numFiles) || !Number.isInteger(start)) return [];

  return Array(numFiles)
    .fill("x")
    .map((_, i) => {
      const currIndexNo = start + i;
      return template.replace(/<index_no>/g, currIndexNo.toString());
    });
}
