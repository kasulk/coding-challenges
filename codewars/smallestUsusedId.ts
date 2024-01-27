export function nextId(ids: number[]): number {
  const sortedUniqueIds = [...new Set(ids)].sort((a, b) => a - b);

  for (let i = 0; ; i++) {
    if (i !== sortedUniqueIds[i]) return i;
  }
}
