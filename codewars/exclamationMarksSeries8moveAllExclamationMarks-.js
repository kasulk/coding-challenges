function remove(str) {
  const strWithoutExMarks = str.replaceAll("!", "");
  const numExMarks = str.length - strWithoutExMarks.length;
  return strWithoutExMarks + "!".repeat(numExMarks);
}
