function eliminateUnsetBits(binary) {
  const ones = binary.replaceAll("0", "");
  return parseInt(ones, 2) || 0;
}
