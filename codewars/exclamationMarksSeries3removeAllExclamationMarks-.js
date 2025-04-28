function remove(str) {
  return str.replaceAll("!", "") + str.match(/!*$/);
}
