function remove(str) {
  const ending = str.match(/!*$/);
  return str.replaceAll("!", "") + ending;
}
