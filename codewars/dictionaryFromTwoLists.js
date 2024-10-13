function createDict(keys, values) {
  return Object.fromEntries(keys.map((key, i) => [key, values[i] ?? null]));
}
