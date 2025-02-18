function modifyMultiply(str, i, num) {
  const word = str.split(" ")[i];
  return Array(num).fill(word).join("-");
}
