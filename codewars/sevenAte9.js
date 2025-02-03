function sevenAte9(str) {
  let result = str;
  while (result.includes("797")) {
    result = result.replace("797", "77");
  }
  return result;
}
