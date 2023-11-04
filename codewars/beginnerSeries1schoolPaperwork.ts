export function paperwork(numClassmates: number, numPages: number): number {
  return numClassmates > 0 && numPages > 0 ? numClassmates * numPages : 0;
}
