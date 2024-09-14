function sumOfIntegersInString(str) {
  return str.match(/\d*/g).reduce((sum, strNum) => sum + Number(strNum), 0);
}
