function tripleX(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") return str.slice(i + 1, i + 3) === "xx";
  }
  return false;
}
