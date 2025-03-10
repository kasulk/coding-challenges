function isItANum(str) {
  const onlyNums = str.replace(/\D/g, "");

  return onlyNums.startsWith("0") && onlyNums.length === 11
    ? onlyNums
    : "Not a phone number";
}
