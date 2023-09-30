function strCount(str, letter) {
  let count = 0;

  str.split("").forEach((char) => char === letter && count++);

  return count;
}
