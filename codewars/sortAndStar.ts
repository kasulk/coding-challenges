export function twoSort(strs: string[]): string {
  return [...strs].sort()[0].split("").join("***");
}
