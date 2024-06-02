function hasUniqueChars(str) {
  return str.length === new Set([...str]).size;
}
