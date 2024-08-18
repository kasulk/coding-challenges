function last(str) {
  return str.split(" ").sort((a, b) => (a.slice(-1) < b.slice(-1) ? -1 : 0));
}
